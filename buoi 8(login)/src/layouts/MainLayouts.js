import React, { useState, useContext, useLayoutEffect, useEffect } from "react";
import AppContext from "AppContext";
import ContainerLayouts from "./ContainerLayouts";
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { useSelector, useDispatch } from "react-redux";
import { setLayout, setDataForHome } from "store/actions";

// ben trong withRouter se goi ntn.
// <MainLayouts {...props} />
const MainLayouts = (props) => {
  const dispatch = useDispatch();
  const { layout } = useSelector(({ configs }) => configs);
  const allStore = useSelector(state => state);
  console.log("allStore", allStore);
  useEffect(() => {
    dispatch(setDataForHome());
  }, []);

  const routes = useContext(AppContext);
  useLayoutEffect(() => {
    const matched = matchRoutes(routes, props.location.pathname)[0];
    if (matched && matched.route.settings) {
      const { layout } = matched.route.settings;
      dispatch(setLayout(layout));
    }
  }, [props.location.pathname, routes]);

  const Layout = ContainerLayouts[layout];
  return <Layout {...props} />;
};

export default withRouter(React.memo(MainLayouts));

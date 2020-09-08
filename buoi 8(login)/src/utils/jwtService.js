import RequestUtils from "./RequestUtils";

class jwtService {
  siginWithUsernameAndPassword = (username, password) => {
    return RequestUtils.Post("/api/auth", {
      username: username,
      password: password,
    })
  };

  setSession = (access_token) => {
    if(access_token) {
      localStorage.setItem("jwt_access_token", access_token);
    } else {
      localStorage.removeItem("jwt_access_token");
    }
  };
}

const intansce = new jwtService();
export default intansce;
// jwtService.siginWithUsernameAndPassword(user, pass);

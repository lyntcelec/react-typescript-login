import * as user from "../constants/user";

export const SetToken = (data: any) => ({
  type: user.SET_TOKEN,
  data,
});

export const UserLogin = (body: any) => {
  return (dispatch: any) => {
    if (body.email !== "" && body.password !== "") {
      dispatch(SetToken(true));
      localStorage.setItem("token", "ABCDEF");
    }
  };
};

export const UserLogout = () => {
  return (dispatch: any) => {
    dispatch(SetToken(false));
    localStorage.removeItem("token");
  };
};

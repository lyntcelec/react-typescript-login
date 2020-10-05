import * as auth from "../constants/auth";
import Cookies from "js-cookie";

export const SetToken = (data: any) => ({
  type: auth.SET_TOKEN,
  data,
});

export function UserLogin(body: any): any {
  return (dispatch: any) => {
    return new Promise(async (resolve) => {
      if (body.email !== "" && body.password !== "") {
        dispatch(SetToken("ABCDEF"));
        Cookies.set("token", "ABCDEF", {expires: body.remember ? 365 : null});
        resolve();
      }
    });
  };
}

export const UserLogout = () => {
  return (dispatch: any) => {
    dispatch(SetToken(null));
    Cookies.remove("token");
  };
};

import * as user from "../constants/user";

const INIT_STATE = {
  AccessToken: false,
};

export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case user.SET_TOKEN:
      return Object.assign({}, state, {
        AccessToken: action.data,
      });

    default:
      return state;
  }
};

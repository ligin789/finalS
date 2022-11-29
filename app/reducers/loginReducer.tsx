import * as ActionTypes from '../actions/types';

const defaultLoginState = {
  isLogged: false,
  resetNavigation: null,
  userData: null,
  error: null,
};

export default function loginReducer(state = defaultLoginState, action: any) {
  switch (action.type) {
    // case ActionTypes.LOGIN_SERVICE_ERROR:
    //     return Object.assign({}, state, {
    //         error: action.error
    //     });

    case ActionTypes.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLogged: true,
        userData: action.responseData,
      });
    case ActionTypes.LOGOUT_SUCCESS:
        return {
            ...state,
            isLogged: false,
            userData: null,
            resetNavigation: action.resetNavigation
        };
    default:
      return state;
  }
}

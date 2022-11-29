import * as ActionTypes from './types';

export function doLogout(params: Object) {
  return (dispatch: any) => {
    dispatch(logoutServiceActionSuccess(params));
  };
}

export function logoutServiceActionSuccess(responseData: any) {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
    responseData: responseData,
  };
}

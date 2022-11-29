import * as ActionTypes from './types';
//import { defaultLoginState } from "../reducers/loginReducer";
//import axios from 'react-native-axios';


// export const apiServiceActionError = (error:any) => ({
//     type: ActionTypes.LOGIN_SERVICE_ERROR,
//     error: error
// })



export function doLogin(params:Object) {
    console.log("1222222222")
    return (dispatch: any) => {
        /*const loginApi = await axios.post(apiHelper.getLoginAPI(), params)
            .then(response => {
                dispatch(loginServiceActionSuccess(response.data));
            }).catch(error => {
                dispatch(apiServiceActionError(error.response.data.message));
            });*/
        dispatch(loginServiceActionSuccess(params));
    }
  }

  export function loginServiceActionSuccess(responseData:any) {
    console.log("1222222222")
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        responseData: responseData
    };
  }

// export function doLogout(resetNavigation: Function) {
//     return (dispatch: any) => {
//         dispatch({
//             type: ActionTypes.LOGOUT_SUCCESS,
//             ...defaultLoginState,
//             resetNavigation
//         });
//     };
// }
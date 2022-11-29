import React from 'react';
import {connect} from 'react-redux';
import {LoginContainer, ProfileContainer} from './app/lib/navigationRoutes';
import {bindActionCreators} from 'redux';

const App = (props: any) => {
  console.log('Enter App : ' + props.isLogged);
  if (props.isLogged) {
    return <ProfileContainer />;
  } else {
    return <LoginContainer />;
  }

  // return (
  // <LoginContainer></LoginContainer>
  // )
};

//namuke oru value allgil varible ee page ill venam (redux value) then map state to props
const mapStateToProps = (state: any, props: any) => {
  return {
    isLogged: state.loginReducer.isLogged,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


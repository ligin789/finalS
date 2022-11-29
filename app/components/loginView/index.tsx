import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Img from '../../assets/loginIcon.png';
import {styles} from './style';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/loginAction';

const LoginView = (props: any) => {
  //LOGIN BUTTON FUNCTION
  const onLoginPress = () => {
    let apiParam = {
      username: 'Test',
      password: '123',
    };
    props.doLogin(apiParam);
    //props.navigation.navigate('HomeScreen');
  };

  return (
    <SafeAreaView>
      <Image source={Img}></Image>
      <View style={styles.box2}>
        <TextInput
          style={styles.textinput}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="black"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.textinput}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="black"
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={onLoginPress} style={styles.loginBtn}>
          <Text
            style={{fontSize: 20, textAlign: 'center', fontFamily: 'Cochin'}}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  return {
    //apiError: state.userReducer.error,
    //userStatus: state.userReducer.userStatus,
    //userData: state.userReducer.userData,
    // isLoginServiceLoading: state.userReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      doLogin: Actions.doLogin,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

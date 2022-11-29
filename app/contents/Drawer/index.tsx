import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {SimpleAccordion} from 'react-native-simple-accordion';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const MenuContent = (props: any) => {
  const {navigation} = props;

  const onMenuItemPress = (menuIndex: any) => (event: any) => {
    switch (menuIndex) {
      case 0:
        navigation.toggleDrawer();
        setTimeout(() => {
          navigation.navigate('MyProfileScreen');
        }, 500);
        break;
      case 1:
        navigation.toggleDrawer();
        setTimeout(() => {
          navigation.navigate('ResourceScreen');
        }, 500);
        break;
      case 2:
        navigation.toggleDrawer();
        setTimeout(() => {
          navigation.navigate('MyPreferenceScreen', {isFromMenu: true});
        }, 500);
        break;
      case 3:
        {
          props.resetProfileImage();
          props.resetProfileAction();
          props.doLogout();
        }
        break;
      default: {
        console.log('error');
      }
    }
  };
  const view = (
    <Text onPress={() => props.navigation.navigate('Cat')}>Hello</Text>
  );
  const simpleAccordionExample = (
    <View>
      <SimpleAccordion
        viewInside={view}
        title={'Simple Accordion'}
        bannerStyle={{backgroundColor: 'white'}}
      />
    </View>
  );

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: '20%',
          backgroundColor: 'grey',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginVertical: 5}}>
          Ligin Abraham
        </Text>
        <Image
          style={{width: 120, height: 120, borderRadius: 70}}
          source={require('../../assets/icon.png')}></Image>
      </View>
      <View style={{margin: 7}}>
        <Text style={{fontSize: 25}}>Profile</Text>
        <Text style={{fontSize: 25}}>Profile</Text>
        <Text style={{fontSize: 25}}>Profile</Text>
        <Text style={{fontSize: 25}}>Profile</Text>

        {simpleAccordionExample}
      </View>
    </View>
  );
};
MenuContent.propTypes = {
  navigation: PropTypes.object,
};

export default MenuContent;

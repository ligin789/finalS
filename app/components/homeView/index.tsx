import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Img from '../../assets/icon.png';
import {styles} from './style';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';


const HomeView = (props:any) => {
  return (
    <View>
      <Image style={styles.ImgContainer} source={Img} />
      <View style={styles.bottomBox}>
        <Text style={styles.welcomeText}>Learn Everything!</Text>
        <Text style={styles.subtext}>Click here to join now</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
          <Text style={styles.buttonRound} >
            <FontAwesome icon={SolidIcons.arrowRight} style={{fontSize: 20}} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeView;

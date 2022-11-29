import {
  View,
  Text,
  Button,
  Switch,
  TextInput,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import {SearchBar} from 'react-native-elements';
import {styles} from './style';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

const images = [
  {
    banner: require('../../assets/banner1.jpg'),
    desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
  {
    banner: require('../../assets/banner2.jpg'),
    desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  },
];


const Logout = () => {};
const ProfileVIew = (props: any) => {
  //brand store switch
  const [switchValue, setSwitchValue] = useState(false);
  const toggleSwitch = value => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{flexGrow: 1}}>
        {/* First section */}
        <View style={styles.topBar}>
          <Switch
            style={{marginVertical: 30}}
            onValueChange={toggleSwitch}
            value={switchValue}
          />
          <TextInput placeholder="Search" style={styles.SearchBar} />
        </View>
        {/* First section ends */}
        <FlatListSlider data={images} imageKey={'banner'} local />
        {/* <Button title="Logout" onPress={Logout}></Button> */}
        <ScrollView horizontal={true} style={styles.scrollBox}>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>
              {' '}
              <FontAwesome
                icon={SolidIcons.moneyCheck}
                style={{fontSize: 20}}
              />
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>
              {' '}
              <FontAwesome icon={SolidIcons.fire} style={{fontSize: 20}} />
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>
              {' '}
              <FontAwesome icon={SolidIcons.bullhorn} style={{fontSize: 20}} />
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>
              {' '}
              <FontAwesome
                icon={SolidIcons.gamepad}
                style={{fontSize: 20, color: 'black'}}
              />
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>Coi</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>Coi</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>Coi</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>Coi</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.scrollItem}>
            <Text>Coi</Text>
          </TouchableHighlight>
        </ScrollView>
        <View style={styles.boxContainer}>
          <View style={styles.box} >
            <Image 
              style={{width: 100, height: 100}}
              source={require('../../assets/phone.png')}
            />
            <Text>Lorem ipsum dolor</Text>
            <Text>Lorem </Text>
          </View>
          <View style={styles.box}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/phone.png')}
            />
            <Text>Lorem ipsum dolor</Text>
            <Text>Lorem </Text>
          </View>
          <View style={styles.box}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/phone.png')}
            />
            <Text>Lorem ipsum dolor</Text>
            <Text>Lorem </Text>
          </View>
        </View>
        <Button title='da' onPress={() => props.navigation.navigate('Cat')}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileVIew;

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
  },
  ImgContainer: {
    zIndex: 3, // works on ios
    elevation: 3,

    width: '100%',
    height: '89%',
  },
  bottomBox: {
    zIndex: 3, // works on ios
    elevation: 3,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -150,
    width: '100%',
    borderRadius: 45,
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  buttonRound: {
    borderRadius: 50,
    backgroundColor: '#0babdb',
    padding: 25,
    color:'white'
  },
  subtext:{
    color:'grey',
    fontSize:20,
    marginVertical:20
  }
});
export {styles};

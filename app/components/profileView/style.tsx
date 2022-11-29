import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  topBar: {
    width: '100%',
    marginHorizontal: 15,
    maxHeight: '7%',
    minHeight: '7%',
    flexDirection: 'row',
  },
  SearchBar: {
    minWidth: '80%',
    minHeight: 40,
    borderRadius: 10,
    marginVertical: 7,
    borderWidth: 1,
    borderColor: 'thistle',
  },
  scrollItem: {
    flex: 0,
    minWidth: 80,
    marginHorizontal: 10,
    backgroundColor: '#d3dceb',
    borderRadius: 40,
    maxHeight: 80,
    minHeight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '33%',
    height: 130,
    backgroundColor: '#D3D3D3',
    alignItems:'center',
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    // paddingBottom:50,
    // paddingTop:50,
    //marginTop:30
  },
  // category: {
  //   flex:1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   backgroundColor: 'yellow',
  //   // paddingBottom:50,
  //   // paddingTop:50,
  //   //marginTop:30
  // },
  scrollBox: {
    maxHeight: '15%',
  },
});
export {styles};

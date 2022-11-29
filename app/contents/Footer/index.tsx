import React, {useContext} from 'react';
import T from 'prop-types';
import {View, Image, Text} from 'react-native';

const FooterTab = (props: any) => {
  //   const { fontStyleConfig, setFontStyleConfig } = useContext(AppContext);
  //   const {tabBarIndex, isFocused,tabBarTitle} = props;
  //   let tabBarImage,tabBarLabelStyle;
  //   if (tabBarIndex === 0) {
  //     tabBarImage = isFocused ? images.dashboardIconActive : images.dashboardIcon;
  //   } else if (tabBarIndex === 1) {
  //     tabBarImage = isFocused ? images.matchesIconActive : images.matchesIcon;
  //   } else if (tabBarIndex === 2) {
  //     tabBarImage = isFocused ? images.activityIconActive : images.activityIcon;
  //   } else if (tabBarIndex === 3) {
  //     tabBarImage = isFocused ? images.goalsIconActive : images.goalsIcon;
  //   } else if (tabBarIndex === 4) {
  //     tabBarImage = isFocused ? images.messagesIconActive : images.messagesIcon;
  //   }

  //   tabBarLabelStyle = isFocused ? [styles.tabBarLabelSelected, fontStyleConfig.BottomTabText] : [styles.tabBarLabel, , fontStyleConfig.BottomTabText];

  return (
    <View>
      {/* <Image resizeMode="contain" source={tabBarImage} /> */}
      <Text numberOfLines={1}>{props.tabBarTitle}</Text>
    </View>
  );
};
FooterTab.propTypes = {
  tabBarIndex: T.number,
  isFocused: T.bool,
  tabBarTitle: T.string,
};

export default FooterTab;

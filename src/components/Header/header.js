import React from 'react';
import { Image, View} from 'react-native';
import HeaderStyle from './style'

export default function HeaderItem() {
  return (
    <View>
    <Image
      style={HeaderStyle.header}
      source={{uri: 'https://forum.codenation.com.br/uploads/default/original/2X/2/2d2d2a9469f0171e7df2c4ee97f70c555e431e76.png'}}
    />
  </View>
  );
}
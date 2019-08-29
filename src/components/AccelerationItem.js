import React from 'react';
import { Text, Image, View, StyleSheet} from 'react-native';

export default function AccelerationItem({ item }) {
  return (
	  <View>
  <Image
          style={style.iconList}
          source={{uri: item.banner_url || 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png'}}
  />
  <Text style={{fontSize: 20}}>{item.name}</Text>
  <Text style={{color: 'purple'}}>{item.location}</Text>
  <Text>{new Date(item.subscription_finish_at).toLocaleString().split(" ")[0]}</Text>
  </View>
  );
}

const style = StyleSheet.create(
  {
    iconList:
    {
      width: 150,
      height: 150,
      resizeMode: 'center'
    }
  }  
  )

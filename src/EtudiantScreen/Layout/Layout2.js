import {View, Text} from 'react-native';
import React from 'react';
import Carousel from '../../AdminScreen/Carousel';

export default function Layout2 () {
  return (
    <View>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
          marginVertical: 15,
          fontWeight: '600',
        }}
      >
        Bienvenue Lionel
      </Text>
      <Carousel name="etude" />
    </View>
  );
}

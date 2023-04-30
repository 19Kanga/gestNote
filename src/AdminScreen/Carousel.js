import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

export const SLIDER_WIDTH = Dimensions.get ('window').width + 0;
export const ITEM_WIDTH = Math.round (SLIDER_WIDTH * 0.95);

const data = [
  {
    id: 1,
    name: 'React JS',
    url: require ('../assets/image/20.png'),
  },
  {
    id: 2,
    name: 'JavaScript',
    url: require ('../assets/image/iiac.png'),
  },
  {
    id: 3,
    name: 'Node JS',
    url: require ('../assets/image/20.png'),
  },
];

const renderItem = ({item}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        // marginTop: -50,
        // borderRadius: 5,
        // borderTopLeftRadius: 5,
        // borderTopRightRadius: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // zIndex: 100,
      }}
    >
      <Image source={item.url} style={{width: 100, height: 100}} />
      <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
        {item.name}
      </Text>
    </View>
  );
};

const Resul = ({name}) => {
  const [index, setIndex] = useState (0);
  const isCarousel = useRef (null);
  return (
    <View
      style={{
        marginTop: name === 'etude' ? 0 : -145,
        marginBottom: 5,
      }}
    >
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex (index)}
      />
      {/* <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          // marginTop: -45,

          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#F4BB41',
        }}
        tappableDots={true}
        inactiveDotStyle={{
          backgroundColor: 'black',
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
};

export default Resul;

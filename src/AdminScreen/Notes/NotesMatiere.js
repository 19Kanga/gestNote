import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Box, Wrap} from '@react-native-material/core';

export default function NotesMatiere({mati}) {
  console.log (mati);
  const update = (matiere, notee) => {
    const [note, setNote] = useState (notee.toString ());
    return (
      <Wrap
        style={{
          paddingVertical: 8,
          paddingHorizontal: 15,
          backgroundColor: 'whitesmoke',
        }}
      >
        <Box
          w="60%"
          h={30}
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingHorizontal: 15,
            // backgroundColor: 'green',
          }}
        >
          <Text style={styles.sectionHeader}>{matiere}</Text>
        </Box>
        <Box
          w="40%"
          h={30}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'yellow',
          }}
        >
          <TextInput
            //   style={styles.input}
            underlineColorAndroid="transparent"
            // placeholder="Email"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            value={note}
            onChangeText={e => setNote (e)}
            style={{
              alignSelf: 'flex-end',
              color: 'black',
              backgroundColor: 'white',
              height: 40,
              width: 90,
              textAlign: 'center',
              textAlignVertical: 'center',
              elevation: 4,
              shadowColor: 'black',
            }}
            //   onChangeText={this.handleEmail}
          />
          {/* <TextInput
            // placeholder="note"
            value={notee}
            style={{width: 60, paddingVertical: 10, borderWidth: 1}}
          /> */}
          {/* <Text style={styles.sectionHeader}></Text> */}
        </Box>
      </Wrap>
    );
  };
  return (
    <View>
      {update (mati.matiere, mati.notes)}
    </View>
  );
}

const styles = StyleSheet.create ({
  text: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
    color: 'white',
    marginHorizontal: 6,
  },
  item: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 14,
    color: 'gray',
    padding: 5,
  },
  // item1: {
  //   // paddingVertical: 5,
  //   width: 45,
  //   // height: 30,
  //   borderWidth: 1,
  //   padding: 5,
  //   marginVertical: 3,
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  // },
  sectionHeader: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 15,
    color: 'gray',
  },
});

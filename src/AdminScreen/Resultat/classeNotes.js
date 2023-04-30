import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  Box,
  IconButton,
  Pressable,
  TextInput,
  Wrap,
} from '@react-native-material/core';

export default function ClasseNotes({notes}) {
  return (
    <Wrap
      spacing={1}
      style={{backgroundColor: notes.color, paddingVertical: 3}}
    >
      <Box
        w={'10%'}
        h={30}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={styles.item}>{notes.num}</Text>
      </Box>
      <Box
        w={'40%'}
        h={30}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={styles.item}>{notes.nom}</Text>
      </Box>
      <Box
        w={'19.3%'}
        h={30}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={styles.item}>{notes.moyenne}</Text>
      </Box>
      <Box
        w={'15%'}
        h={30}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={styles.item}>{notes.total} /30</Text>
      </Box>
      <Box
        w={'14.2%'}
        h={30}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pressable>
          <Text style={styles.item}>{notes.euil}</Text>
        </Pressable>
      </Box>
    </Wrap>
  );
}

const styles = StyleSheet.create ({
  item: {
    fontFamily: 'RobotoSlab-Medium',
    fontSize: 14,
    color: 'gray',
    padding: 5,
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  Box,
  IconButton,
  Pressable,
  TextInput,
  Wrap,
} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export default function ClasseNotes({notes, url, long, navigation}) {
  const navi = useNavigation ();

  return (
    <Pressable onPress={() => navi.navigate (url, {notes})}>
      <Wrap
        // spacing={1}
        style={{
          paddingVertical: 4,
          backgroundColor: notes.moyenne >= 12
            ? 'rgba(52, 168, 83,.2)'
            : 'rgba(224, 57, 44,.2)',
        }}
      >
        <Box
          w={'10%'}
          h={30}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.item}>{long}</Text>
        </Box>
        <Box
          w={'40%'}
          h={30}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={styles.item}>
            {notes.user.firstname} {notes.user.lastname}
          </Text>
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
          <Text style={styles.item}>{notes.credit} /30</Text>
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
            <Text style={styles.item}>
              {url === 'DetailNotes'
                ? <Icon name="pencil-sharp" size={18} />
                : <Icon name="eye" size={18} />}
            </Text>
          </Pressable>
        </Box>
      </Wrap>
    </Pressable>
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

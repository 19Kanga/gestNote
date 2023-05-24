import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Carousel from '../../AdminScreen/Carousel';
import {Pressable} from '@react-native-material/core';

const styles = StyleSheet.create ({
  actualite: {
    height: 150,
    backgroundColor: 'white',
    // marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    // borderWidth: 1,
    elevation: 10,
    shadowColor: 'rgba(118,118,118,0.9)',
    shadowRadius: 10,
    overflow: 'hidden',
    // opacity: 0.8,
  },
});

export default function Layout2 () {
  return (
    <View>
      <ScrollView style={{height: '100%'}}>
        <View style={{marginTop: 10}}>
          <Carousel name="etude" />
        </View>
        <View style={{marginHorizontal: 10}}>

          <Text
            style={{
              fontSize: 16,
              // fontFamily: 'Yatra-One',
              // color: '#333',
              marginVertical: 3,
              marginHorizontal: 10,
              fontWeight: 600,
            }}
          >
            Actualités
          </Text>

          <View style={{borderRadius: 10, overflow: 'hidden'}}>
            <ImageBackground
              source={require ('../../assets/image/IMG-20230503-WA0003.jpg')}
              resizeMode="cover"
              style={styles.actualite}
            >
              <Pressable style={{height: 150, position: 'relative'}}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    height: 80,
                  }}
                >
                  <View
                    style={{
                      height: '60%',
                      padding: 10,
                    }}
                  >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Examens de fin de premier Semestre
                    </Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'rgba(0,0,0,0.8)',
                      height: '40%',
                    }}
                  >
                    <Pressable
                      pressEffectColor="white"
                      style={{
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(17, 119, 187,0.8)',
                      }}
                    >
                      <Text style={{color: 'white', fontWeight: '600'}}>
                        Voir plus
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            </ImageBackground>
          </View>
          <View style={{borderRadius: 10, overflow: 'hidden'}}>
            <ImageBackground
              source={require ('../../assets/image/IMG-20230503-WA0005.jpg')}
              resizeMode="cover"
              style={styles.actualite}
            >
              <Pressable style={{height: 150, position: 'relative'}}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    height: 80,
                  }}
                >
                  <View
                    style={{
                      height: '60%',
                      padding: 10,
                    }}
                  >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Resultat de fin de premier semestre disponible
                    </Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'rgba(0,0,0,0.8)',
                      height: '40%',
                    }}
                  >
                    <Pressable
                      pressEffectColor="white"
                      style={{
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(17, 119, 187,0.8)',
                      }}
                    >
                      <Text style={{color: 'white', fontWeight: '600'}}>
                        Voir plus
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            </ImageBackground>
          </View>
          <View style={{borderRadius: 10, overflow: 'hidden'}}>
            <ImageBackground
              source={require ('../../assets/image/IMG-20230503-WA0006.jpg')}
              resizeMode="cover"
              style={styles.actualite}
            >
              <Pressable style={{height: 150, position: 'relative'}}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    height: 80,
                  }}
                >
                  <View
                    style={{
                      height: '60%',
                      padding: 10,
                    }}
                  >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Programme de composition disponible
                    </Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'rgba(0,0,0,0.8)',
                      height: '40%',
                    }}
                  >
                    <Pressable
                      pressEffectColor="white"
                      style={{
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(17, 119, 187,0.8)',
                      }}
                    >
                      <Text style={{color: 'white', fontWeight: '600'}}>
                        Voir plus
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            </ImageBackground>
          </View>
          <View style={{borderRadius: 10, overflow: 'hidden'}}>
            <ImageBackground
              source={require ('../../assets/image/IMG-20230503-WA0003.jpg')}
              resizeMode="cover"
              style={styles.actualite}
            >
              <Pressable style={{height: 150, position: 'relative'}}>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    height: 80,
                  }}
                >
                  <View
                    style={{
                      height: '60%',
                      padding: 10,
                    }}
                  >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      Arrivée des representants campus françe
                    </Text>
                  </View>
                  <View
                    style={{
                      // backgroundColor: 'rgba(0,0,0,0.8)',
                      height: '40%',
                    }}
                  >
                    <Pressable
                      pressEffectColor="white"
                      style={{
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(17, 119, 187,0.8)',
                      }}
                    >
                      <Text style={{color: 'white', fontWeight: '600'}}>
                        Voir plus
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            </ImageBackground>
          </View>

          <View
            style={{
              backgroundColor: '#1177BB',
              width: '60%',
              alignSelf: 'center',
              borderRadius: 50,
              marginVertical: 10,
              overflow: 'hidden',
            }}
          >
            <Pressable
              style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: 'white',
                }}
              >
                Voir plus
              </Text>
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </View>
  );
}

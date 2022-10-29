import * as React from 'react';
import { Pressable, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Image, ScrollView } from 'react-native';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  MaterialIcons,
} from '@expo/vector-icons';
import { SearchBar } from '@rneui/themed';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bagus Muhammad Wijaksono</Text>
      <Text>3.34.21.3.06</Text>
      <Pressable
        onPress={() => navigation.openDrawer()}
        style={{ padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text>Buka Halaman</Text>
      </Pressable>
    </View>
  );
}

function Post({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={s.toolbar}></View>
      <ScrollView>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginBottom: 60,
          }}
        />
        <View style={{ height: 3, backgroundColor: '#F6F6F6' }} />
        {/* stories end */}

        <View style={{ marginBottom: 40 }}>
          <View
            style={{
              height: 50,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
                }}
                style={{ width: 40, height: 40, borderRadius: 17.5 }}
              />
              <Text style={{ fontSize: 15 }}> Yournamehere</Text>
            </View>

            <MaterialCommunityIcons
              style={{ marginTop: 8 }}
              size={30}
              color="#999999"
              name="dots-horizontal"
            />
          </View>
          <Image
            style={{ height: 400 }}
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
          />
          <View
            style={{
              height: 40,
              backgroundColor: '#FFFFFF',
              justifyContent: 'space-between',
              paddingLeft: 8,
              paddingRight: 8,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 140,
                paddingLeft: 8,
                paddingRight: 8,
                marginTop: 5,
              }}>
              <Ionicons size={35} color="red" name="heart" />
              <FontAwesome size={30} color="#262626" name="comment-o" />
              <FontAwesome size={29} color="#262626" name="send-o" />
            </View>

            <FontAwesome
              size={30}
              style={{ marginTop: 5 }}
              color="#262626"
              name="bookmark-o"
            />
          </View>
          <View
            key={'comment-section'}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 10,
              paddingLeft: 10,
            }}>
            <Text style={{ marginTop: 5, fontWeight: 'bold' }}> 22 Likes</Text>
          </View>
          <View>
            <Text style={{ paddingLeft: 10, marginTop: 10 }}>
              <Text style={s.boldText}>Buagusemwe</Text> Shhhhheeeeeeessh
            </Text>
          </View>
        </View>
        <View style={{ height: 3, backgroundColor: '#F6F6F6' }} />
        {/* stories end */}

        <View style={{ marginBottom: 40 }}>
          <View
            style={{
              height: 50,
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/df/ef/52/dfef52bc718c0e35ded5ad5eb80da4bb.jpg',
                }}
                style={{ width: 40, height: 40, borderRadius: 17.5 }}
              />
              <Text style={{ fontSize: 15 }}> Yournamehere</Text>
            </View>

            <MaterialCommunityIcons
              style={{ marginTop: 8 }}
              size={30}
              color="#999999"
              name="dots-horizontal"
            />
          </View>
          <Image
            style={{ height: 400 }}
            source={{
              uri: 'https://i.pinimg.com/originals/df/ef/52/dfef52bc718c0e35ded5ad5eb80da4bb.jpg',
            }}
          />
          <View
            style={{
              height: 40,
              backgroundColor: '#FFFFFF',
              justifyContent: 'space-between',
              paddingLeft: 8,
              paddingRight: 8,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 140,
                paddingLeft: 8,
                paddingRight: 8,
                marginTop: 5,
              }}>
              <Ionicons size={35} color="red" name="heart" />
              <FontAwesome size={30} color="#262626" name="comment-o" />
              <FontAwesome size={29} color="#262626" name="send-o" />
            </View>

            <FontAwesome
              size={30}
              style={{ marginTop: 5 }}
              color="#262626"
              name="bookmark-o"
            />
          </View>
          <View
            key={'comment-section'}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 10,
              paddingLeft: 10,
            }}>
            <Text style={{ marginTop: 5, fontWeight: 'bold' }}> 136 Likes</Text>
          </View>
          <View>
            <Text style={{ paddingLeft: 10, marginTop: 10 }}>
              <Text style={s.boldText}>Buagusemwe</Text> ????????????
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 50,
          elevation: 5,
          borderTopColor: '#000',
          flexDirection: 'row',
          backgroundColor: '#FFF',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
        }}>
        <MaterialIcons size={35} color="black" name="home" />
        <Feather size={35} color="black" name="search" />
        <Feather size={35} color="black" name="plus-square" />
        <MaterialIcons size={35} color="black" name="favorite-border" />
        <Feather
          size={35}
          color="black"
          name="user"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

function Following({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={s.toolbar}></View>
      <View
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 23,
        }}
      />
      <SearchBar
        placeholder="Search Here..."
        lightTheme
        round
        platform="ios"
        containerStyle={{
          backgroundColor: 'white',
          borderWidth: 0,
          borderRadius: 100,
        }}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingBottom: 20,
            marginTop: 13,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 1000 }}
          />
          <View style={{ flexDirection: 'Collum', marginLeft: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              Yournamehere
            </Text>
            <Text style={{ fontSize: 12 }}> Yournamehere</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('Succesfuly Add!')}
            style={s.button}>
            <Text style={s.buttonText}>Add</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginTop: 8, marginLeft: 5 }}
            size={30}
            color="#999999"
            name="dots-horizontal"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 1000 }}
          />
          <View style={{ flexDirection: 'Collum', marginLeft: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              Yournamehere
            </Text>
            <Text style={{ fontSize: 12 }}> Yournamehere</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('Succesfuly Add!')}
            style={s.button}>
            <Text style={s.buttonText}>Add</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginTop: 8, marginLeft: 5 }}
            size={30}
            color="#999999"
            name="dots-horizontal"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 1000 }}
          />
          <View style={{ flexDirection: 'Collum', marginLeft: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              Yournamehere
            </Text>
            <Text style={{ fontSize: 12 }}> Yournamehere</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('Succesfuly Add!')}
            style={s.button}>
            <Text style={s.buttonText}>Add</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginTop: 8, marginLeft: 5 }}
            size={30}
            color="#999999"
            name="dots-horizontal"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 1000 }}
          />
          <View style={{ flexDirection: 'Collum', marginLeft: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              Yournamehere
            </Text>
            <Text style={{ fontSize: 12 }}> Yournamehere</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('Succesfuly Add!')}
            style={s.button}>
            <Text style={s.buttonText}>Add</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginTop: 8, marginLeft: 5 }}
            size={30}
            color="#999999"
            name="dots-horizontal"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 1000 }}
          />
          <View style={{ flexDirection: 'Collum', marginLeft: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              Yournamehere
            </Text>
            <Text style={{ fontSize: 12 }}> Yournamehere</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('Succesfuly Add!')}
            style={s.button}>
            <Text style={s.buttonText}>Add</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginTop: 8, marginLeft: 5 }}
            size={30}
            color="#999999"
            name="dots-horizontal"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 1000 }}
          />
          <View style={{ flexDirection: 'Collum', marginLeft: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              Yournamehere
            </Text>
            <Text style={{ fontSize: 12 }}> Yournamehere</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('Succesfuly Add!')}
            style={s.button}>
            <Text style={s.buttonText}>Add</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginTop: 8, marginLeft: 5 }}
            size={30}
            color="#999999"
            name="dots-horizontal"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            paddingBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 60, height: 60, borderRadius: 1000 }}
          />
          <View style={{ flexDirection: 'Collum', marginLeft: 15 }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
              {' '}
              Yournamehere
            </Text>
            <Text style={{ fontSize: 12 }}> Yournamehere</Text>
          </View>
          <TouchableOpacity
            onPress={() => alert('Succesfuly Add!')}
            style={s.button}>
            <Text style={s.buttonText}>Add</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            style={{ marginTop: 8, marginLeft: 5 }}
            size={30}
            color="#999999"
            name="dots-horizontal"
          />
        </View>
      </ScrollView>
      <View
        style={{
          height: 50,
          elevation: 5,
          borderTopColor: '#000',
          flexDirection: 'row',
          backgroundColor: '#FFF',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
        }}>
        <MaterialIcons size={35} color="black" name="home" />
        <Feather size={35} color="black" name="search" />
        <Feather size={35} color="black" name="plus-square" />
        <MaterialIcons size={35} color="black" name="favorite-border" />
        <Feather size={35} color="black" name="user" />
      </View>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={s.toolbar}></View>
      <View
        style={{
          borderBottomColor: 'lightgray',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: 40,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          fontWeight: 'bold',
        }}>
        Bagus Muhammad Wijaksono
      </Text>
      <View
        style={{
          marginBottom: 20,
        }}
      />
      <ScrollView>
        <View></View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',

            paddingBottom: 20,
          }}>
          <Image
            source={{
              uri: 'https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg',
            }}
            style={{ width: 80, height: 80, borderRadius: 1000 }}
          />

          <View
            style={{
              flexDirection: 'Collum',
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> 9K</Text>
            <Text style={{ fontSize: 15 }}> Post</Text>
          </View>
          <View
            style={{
              flexDirection: 'Collum',
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> 61K</Text>
            <Text style={{ fontSize: 15 }}> Follower</Text>
          </View>
          <View
            style={{
              flexDirection: 'Collum',
              marginLeft: 15,
              alignItems: 'center',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}> 61K</Text>
            <Text style={{ fontSize: 15 }}> Follower</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              borderBottomColor: 'lightgray',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginBottom: 12,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-between',
              padding: 10,
            }}>
            <Feather size={35} color="black" name="grid" />
            <Feather size={35} color="black" name="user" />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'lightgray',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/original/002/449/723/5b9.jfif',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/newsfeed/002/449/704/012.jfif',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/newsfeed/002/449/702/78c.jpeg',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/original/002/456/466/077',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/original/002/449/707/941.jfif',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/original/002/455/090/431',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/original/002/449/714/6ff.jfif',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOG_b6YZhuT6LThymOvJVognCvg3qaX3byjI7tsSEqFlFTNAIGHbFb7vDJ5g_jQ-RJnQ&usqp=CAU',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
            </View>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNoUrqR56wOSevKapokRvuT6vcC7B1y5F82yFoigkDW1VC8hSggKsGHvmKKK1PIoWh7Q&usqp=CAU',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFsXCsmRIUldq9FayU5w4vx1zydLNoMGuIg&usqp=CAU',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/masonry/002/463/686/4fb.jpg',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
              <Image
                source={{
                  uri: 'https://i.kym-cdn.com/photos/images/original/002/453/563/239',
                }}
                style={{ width: 120, height: 120, margin: 2 }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 50,
          elevation: 5,
          borderTopColor: '#000',
          flexDirection: 'row',
          backgroundColor: '#FFF',
          justifyContent: 'space-between',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
        }}>
        <MaterialIcons size={35} color="black" name="home" />
        <Feather size={35} color="black" name="search" />
        <Feather size={35} color="black" name="plus-square" />
        <MaterialIcons size={35} color="black" name="favorite-border" />
        <Feather size={35} color="black" name="user" />
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Post" component={Post} />
        <Drawer.Screen name="Following" component={Following} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
const s = StyleSheet.create({
  toolbar: {
    elevation: 2,
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 11,
    marginLeft: 50,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
});

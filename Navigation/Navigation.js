import { StyleSheet, Text, Image, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail';

const Stack = createNativeStackNavigator();

export default function Nav(){
    return (
      <NavigationContainer>
        <Stack.Navigator style={{ flex:1, marginTop: '10', width: '100%'}}>
          <Stack.Screen name="Chercher" component={Search}/>
          <Stack.Screen name='Detail' component={FilmDetail}
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              navigation.navigate('Detail', {
              idFilm: idFilm,
            });
        }}
      />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
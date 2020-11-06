
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Screen1 from '../screens/screen1'
import Screen2 from '../screens/screen2'
import Screen3 from '../screens/screen3'
import Screen4 from '../screens/screen4'
import Screen5 from '../screens/screen5'
import Screen6 from '../screens/screen6'
import Screen7 from '../screens/screen7'
import Screen8 from '../screens/screen8'
import Screen9 from '../screens/screen9'
import Screen10 from '../screens/screen10'
import Screen11 from '../screens/screen11'
import Screen12 from '../screens/screen12'
import Screen13 from '../screens/screen13'
import Screen14 from '../screens/screen14'
import Screen15 from '../screens/screen15'
import Screen16 from '../screens/screen16'
import Screen17 from '../screens/screen17'
import Screen18 from '../screens/screen18'


const HomeStack = createStackNavigator();

function Homescreen(){
  return(
<HomeStack.Navigator
 screenOptions={{
  headerShown: false,
 }}
>
    <HomeStack.Screen name={'Screen1'} component={Screen1} />
    <HomeStack.Screen name={'Screen2'} component={Screen2} />
    <HomeStack.Screen name={'Screen3'} component={Screen3} />
    <HomeStack.Screen name={'Screen4'} component={Screen4} />
    <HomeStack.Screen name={'Screen5'} component={Screen5} />
    <HomeStack.Screen name={'Screen6'} component={Screen6} />
    <HomeStack.Screen name={'Screen7'} component={Screen7} />
    <HomeStack.Screen name={'Screen8'} component={Screen8} />
    <HomeStack.Screen name={'Screen9'} component={Screen9} />
    <HomeStack.Screen name={'Screen10'} component={Screen10} />
    <HomeStack.Screen name={'Screen11'} component={Screen11} />
    <HomeStack.Screen name={'Screen12'} component={Screen12} />
    <HomeStack.Screen name={'Screen13'} component={Screen13} />
    <HomeStack.Screen name={'Screen14'} component={Screen14} />
    <HomeStack.Screen name={'Screen15'} component={Screen15} />
    <HomeStack.Screen name={'Screen16'} component={Screen16} />
    <HomeStack.Screen name={'Screen17'} component={Screen17} />
    <HomeStack.Screen name={'Screen18'} component={Screen18} />

  </HomeStack.Navigator>
  // </NavigationContainer>
  );
}


export default Homescreen;
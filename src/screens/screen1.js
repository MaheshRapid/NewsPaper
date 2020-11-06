// Mahesh
//27/10/2020
//React Native Developer
//Screen number 1

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen1({navigation }) {

    return (
        <View style={{ }}>
           
            <ImageBackground style={{height:600, width:400}}
                source={require('../images/brand.png')}>
                    <Image source={require('../images/logo.png')} style={{height:100, width:100, top:400,  alignSelf:'center'}}></Image>
                     {/* <Text style={{fontWeight:'bold', fontSize:55, top:400, color:'#FFB300', alignSelf:'center'}}>PB</Text> */}
                    
             </ImageBackground>
             <TouchableOpacity style={{marginTop:20}}
              onPress={() =>  navigation.navigate('Screen2')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity>

        </View>


    );
}


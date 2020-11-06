
// Mahesh
//27/10/2020
//React Native Developer
//Screen number 3

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import Screen5 from './screen5'

export default function Screen3({ navigation }) {
   
    return (
        <View style={{}}>
             <Image source={require('../images/logo.png')} style={{ height: 60, width: 60}}></Image>
            {/* <Text style={{ fontWeight: 'bold', fontSize: 40, margin: 15, color: '#FFB300' }}>PB</Text> */}
            <View style={{ margin: 20, marginTop: 100 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222222' }}>Confirmation Code</Text>
                <Text style={{ top: 10, fontSize: 15, color: '#7E7E7E' }}>We sent a code to <Text style={{color:'#0073F7'}}>9502558103 </Text> please enter down</Text>
            </View>
            <View style={{ flexDirection: 'row'}}>
                <TextInput style={{borderRadius:4, textAlign:'center', marginLeft: 20, borderWidth: 1, borderColor: '#C3D3D4', height: 56, width: 76 }} keyboardType="number-pad">
                </TextInput>
                <TextInput style={{ borderRadius:4,textAlign:'center',marginLeft: 15, borderWidth: 1, borderColor: '#C3D3D4', height: 56, width: 76 }} keyboardType="number-pad">
                </TextInput>
                <TextInput style={{borderRadius:4,textAlign:'center', marginLeft: 15, borderWidth: 1, borderColor: '#C3D3D4', height: 56, width: 76 }} keyboardType="number-pad">
                </TextInput>
                <TextInput style={{ borderRadius:4,textAlign:'center',marginLeft: 15, borderWidth: 1, borderColor: '#C3D3D4', height: 56, width: 76 }} keyboardType="number-pad">
                </TextInput>

            </View>

            <TouchableOpacity style={{alignSelf:'center', margin: 20, marginTop: 50 }}>
                <Text style={{ color: '#7E7E7E', textAlign: 'center', top: 15 }}>Resend Code</Text>
            </TouchableOpacity>



            <TouchableOpacity  onPress={() => navigation.navigate('Screen5')} style={{alignSelf:'center', height: 56, width: 335, backgroundColor: '#E4E7ED', margin: 20, marginTop: 50 }}>
                <Text style={{ color: '#7E7E7E', textAlign: 'center', top: 15 }}>Confirm Code</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen4')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity> */}



        </View>


    );
}


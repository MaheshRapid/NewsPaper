// Mahesh
//27/10/2020
//React Native Developer
//Screen number 2

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen2({navigation }) {
    return (
        <View style={{}}>
            <Image source={require('../images/logo.png')} style={{ height: 60, width: 60}}></Image>
            {/* <Text style={{ fontWeight: 'bold', fontSize: 40, margin: 15, color: '#FFB300' }}>PB</Text> */}
            <View style={{ margin: 20, marginTop: 100 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222222' }}>Phone Number</Text>
                <Text style={{ top: 10, fontSize: 15, color: '#7E7E7E' }}>Enter your Phone Number or Mobile Number</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginLeft: 20, borderWidth: 1, borderRightWidth: 0, borderColor: '#C3D3D4', height: 56, width: 83 }}>
                    <Text style={{ alignSelf: 'center', top: 5, fontSize: 23 }}>+ 91 </Text></TouchableOpacity>
                <TouchableOpacity style={{ borderWidth: 1, borderColor: '#0073F7', height: 56, width: 252 }}>
                    <TextInput style={{ alignSelf: 'center', color: '#3D3C3A', fontSize: 23 }} keyboardType="number-pad" placeholder="95025587411"></TextInput></TouchableOpacity>
            </View>


            <TouchableOpacity 
             onPress={() =>  navigation.navigate('Screen3')}
            style={{ height: 56, width: 335, backgroundColor: '#007AB8', margin: 20, marginTop: 50 }}>
                <Text style={{ color: 'white', textAlign: 'center', top: 15 }}>Send Code</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen3')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity> */}

        </View>
    );
}



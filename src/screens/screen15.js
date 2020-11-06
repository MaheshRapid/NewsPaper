// Mahesh
//23/10/2020
//React Native Developer
//Screen number 15

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen15({navigation }) {

    return (
        <View style={{ backgroundColor: 'lightgrey', height: 1000 }}>
            <View style={{ height: 60, backgroundColor: 'white', flexDirection:'row' }}>
            <TouchableOpacity>
                <Image source={require('../images/left_arrow.png')} style={{top:25, height: 18, width: 23,marginLeft:20 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', marginLeft: 50, top:20 }}>Profile</Text>
            </View>

            <View style={{ height: 120, width: 400, backgroundColor: 'white', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:10, right:10 }}>
                    <Text style={{ fontSize: 15, color: 'grey', marginLeft:20 }}>Profile</Text>
                    <TouchableOpacity><Text style={{ color: 'blue' }}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={{marginLeft:20, fontSize:18, color:'#000000',}}>Eshwar Krishna</Text>
                <Text style={{marginLeft:20, fontSize:18, color:'#000000', }}>+91 9999999999</Text>
            </View>

            <View style={{ height: 100, width: 400, backgroundColor: 'white', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:10, right:10 }}>
                    <Text style={{ fontSize: 15, color: 'grey', marginLeft:20 }}>Address</Text>
                    <TouchableOpacity><Text style={{ color: 'blue' }}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={{marginLeft:20, fontSize:18, color:'#000000'}}>1-1-23, karimnagar, Telangana</Text>
                {/* <Text style={{marginLeft:20, fontSize:18, color:'black', fontWeight:'bold'}}>+91 9999999999</Text> */}
            </View>

            <View style={{ height: 100, width: 400, backgroundColor: 'white', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:10, right:10 }}>
                    <Text style={{ fontSize: 15, color: 'grey', marginLeft:20 }}>Locality</Text>
                    <TouchableOpacity><Text style={{ color: 'blue' }}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={{marginLeft:20, fontSize:18, color:'#000000'}}>Kadapa</Text>
            </View>

            <View style={{ height: 100, width: 400, backgroundColor: 'white', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:10, right:10 }}>
                    <Text style={{ fontSize: 15, color: 'grey', marginLeft:20 }}>City</Text>
                    <TouchableOpacity><Text style={{ color: 'blue' }}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={{marginLeft:20, fontSize:18, color:'#000000'}}>Karimnagar</Text>
            </View>

            <View style={{ height: 100, width: 400, backgroundColor: 'white', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:10, right:10 }}>
                    <Text style={{ fontSize: 15, color: 'grey', marginLeft:20 }}>State</Text>
                    <TouchableOpacity><Text style={{ color: 'blue' }}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={{marginLeft:20, fontSize:18, color:'#000000'}}>Telangana</Text>
            </View>

            <View style={{ height: 100, width: 400, backgroundColor: 'white', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin:10, right:10 }}>
                    <Text style={{ fontSize: 15, color: 'grey', marginLeft:20 }}>Mobile Number</Text>
                    <TouchableOpacity><Text style={{ color: 'blue' }}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={{marginLeft:20, fontSize:18, color:'#000000'}}>9502558888</Text>
            </View>
            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen16')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity>
           
        </View>


    );
}

// Mahesh
//23/10/2020
//React Native Developer
//Screen number 14

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen14({navigation }) {

    return (
        <View style={{margin:20 }}>
            <View style={{ height:80, backgroundColor:'white', borderBottomWidth:1, borderBottomColor:'#F7F7F7' }}>
                <Text style={{ fontSize: 20, color: 'black',top:20, fontWeight:'bold'}}>Menu</Text>
            </View>
           
    

            <View style={{ height: 70, width: 350, backgroundColor: 'white', borderBottomWidth:1, borderBottomColor:'#F7F7F7' }}>
            <Text style={{fontSize:15, color:'black', margin:10, fontWeight:'bold'}}>My Plan</Text>
                <TouchableOpacity><Text style={{marginLeft:10}}>View Or Modift Current Subscriptions</Text></TouchableOpacity>
            </View>

            <View style={{ height: 70, width: 350, backgroundColor: 'white', borderBottomWidth:1, borderBottomColor:'#F7F7F7' }}>
            <Text style={{fontSize:15, color:'black', margin:10, fontWeight:'bold'}}>Wallet</Text>
                <TouchableOpacity><Text style={{marginLeft:10}}>View Balance credit history and Recharge Wallet</Text></TouchableOpacity>
            </View>

            <View style={{ height: 70, width: 350, backgroundColor: 'white', borderBottomWidth:1, borderBottomColor:'#F7F7F7' }}>
            <Text style={{fontSize:15, color:'black', margin:10, fontWeight:'bold'}}>My Profile</Text>
                <TouchableOpacity><Text style={{marginLeft:10}}>View Update profile and manage ring the bell option</Text></TouchableOpacity>
            </View>

            <View style={{ height: 70, width: 350, backgroundColor: 'white', borderBottomWidth:1, borderBottomColor:'#F7F7F7' }}>
            <Text style={{fontSize:15, color:'black', margin:10, fontWeight:'bold'}}>Support</Text>
                <TouchableOpacity><Text style={{marginLeft:10}}>
                    Help on queries contact with our support team</Text></TouchableOpacity>
            </View>

            <View style={{ height: 70, width: 350, backgroundColor: 'white', borderBottomWidth:1, borderBottomColor:'#F7F7F7' }}>
            <Text style={{fontSize:15, color:'black', margin:10, fontWeight:'bold'}}>Legal</Text>
                <TouchableOpacity><Text style={{marginLeft:10}}>
                Privacy Policy terms and conditions</Text></TouchableOpacity>
            </View>

            <View style={{ height: 70, width: 350, backgroundColor: 'white', borderBottomWidth:1, borderBottomColor:'#F7F7F7' }}>
            <Text style={{fontSize:15, color:'black', margin:10, fontWeight:'bold'}}>Logout</Text>
                
            </View>
            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen15')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity>

        </View>


    );
}

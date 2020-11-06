// Mahesh
//23/10/2020
//React Native Developer
//Screen number 18

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen18({navigation }) {

    return (
        <View style={{}}>
            <View>
                <TouchableOpacity>
                    <Image source={require('../images/left_arrow.png')} style={{ left: 20, height: 18, marginTop: 30, width: 23, }} />
                </TouchableOpacity>
            </View>

            <View style={{ height: 60, width: 400, backgroundColor: '#F9F8F8', marginTop:20 }}>
                <Text style={{ fontSize: 25, textAlign: 'center', color: '#000000', top: 15, marginLeft: 20 }}>Customer Details</Text>
            </View>

            <View style={{marginTop:20,alignSelf:'center', borderBottomWidth:1, borderBottomColor:'blue', height:30,width:330, flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize:20}} >Full Name</Text>
                <Text style={{fontSize:20}} >:</Text>
                <Text style={{fontSize:20}} >Jonathan Doe</Text>
            </View>
            <View style={{marginTop:20,alignSelf:'center', borderBottomWidth:1, borderBottomColor:'blue', height:30,width:330, flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize:20}} >Address1</Text>
                <Text style={{fontSize:20}} >:</Text>
                <Text style={{fontSize:20}} >7-99,ABC, AP</Text>
            </View>
            <View style={{marginTop:20,alignSelf:'center', borderBottomWidth:1, borderBottomColor:'blue', height:30,width:330, flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize:20}} >Address2</Text>
                <Text style={{fontSize:20}} >:</Text>
                <Text style={{fontSize:20}} >7-99,ABC, AP</Text>
            </View>
            <View style={{marginTop:20,alignSelf:'center', borderBottomWidth:1, borderBottomColor:'blue', height:30,width:330, flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize:20}} >Locality</Text>
                <Text style={{fontSize:20}} >:</Text>
                <Text style={{fontSize:20}} >Kadapa</Text>
            </View>
            <View style={{marginTop:20,alignSelf:'center', borderBottomWidth:1, borderBottomColor:'blue', height:30,width:330, flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize:20}} >City</Text>
                <Text style={{fontSize:20}} >:</Text>
                <Text style={{fontSize:20}} >Kadapa</Text>
            </View>
            <View style={{marginTop:20,alignSelf:'center', borderBottomWidth:1, borderBottomColor:'blue', height:30,width:330, flexDirection:'row', justifyContent:'space-around'}}>
                <Text style={{fontSize:20}} >State</Text>
                <Text style={{fontSize:20}} >:</Text>
                <Text style={{fontSize:20}} >Telangana</Text>
            </View>
            {/* <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen1')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity> */}

        </View >
    );
}

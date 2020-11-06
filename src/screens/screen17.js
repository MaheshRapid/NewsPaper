// Mahesh
//23/10/2020
//React Native Developer
//Screen number 17

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen17({navigation }) {

    return (
        <View style={{}}>
            <View style={{ height: 80, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, color: '#000000', top: 30, marginLeft: 30 }}>Customers Request</Text>
            </View>

            <View style={{ height: 60, width: 400, backgroundColor: '#F9F8F8', flexDirection: 'row' }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15, marginLeft:20 }}>Customer ID</Text>
                <Text style={{ fontSize: 16, color: '#262C2E', top: 15, marginLeft:40}}>Customer Name</Text>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}> </Text>
            </View>

            <View style={{ height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}>Rajesh</Text>
                <Text style={{ fontSize: 16, color: 'red', top: 15 }}> Hyd</Text>
                <View style={{ flexDirection: 'row' }}>
                   
                    <TouchableOpacity>
                    <View style={{marginLeft:5, borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#5B7BFD', top:15}}>
                    <Text style={{  color: '#5B7BFD', left:5, fontWeight:'bold'}}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}>Rajesh</Text>
                <Text style={{ fontSize: 16, color: 'red', top: 15 }}> Hyd</Text>
                <View style={{ flexDirection: 'row' }}>
                   
                    <TouchableOpacity>
                    <View style={{marginLeft:5, borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#5B7BFD', top:15}}>
                    <Text style={{  color: '#5B7BFD', left:5, fontWeight:'bold'}}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}>Rajesh</Text>
                <Text style={{ fontSize: 16, color: 'red', top: 15 }}> Hyd</Text>
                <View style={{ flexDirection: 'row' }}>
                   
                    <TouchableOpacity>
                    <View style={{marginLeft:5, borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#5B7BFD', top:15}}>
                    <Text style={{  color: '#5B7BFD', left:5, fontWeight:'bold'}}>+</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}>Rajesh</Text>
                <Text style={{ fontSize: 16, color: 'red', top: 15 }}> Hyd</Text>
                <View style={{ flexDirection: 'row' }}>
                    {/* <TouchableOpacity>
                    <View style={{borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#DB0011', top:15}}>
                    <Text style={{ color: 'red', left:5, fontWeight:'bold'}}>- </Text>
                    </View>
                    </TouchableOpacity> */}
                    <TouchableOpacity>
                    <View style={{marginLeft:5, borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#5B7BFD', top:15}}>
                    <Text style={{  color: '#5B7BFD', left:5, fontWeight:'bold'}}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}>Rajesh</Text>
                <Text style={{ fontSize: 16, color: 'red', top: 15 }}> Hyd</Text>
                <View style={{ flexDirection: 'row' }}>
                    
                    <TouchableOpacity>
                    <View style={{marginLeft:5, borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#5B7BFD', top:15}}>
                    <Text style={{  color: '#5B7BFD', left:5, fontWeight:'bold'}}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}>Rajesh</Text>
                <Text style={{ fontSize: 16, color: 'red', top: 15 }}> Hyd</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                  
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{marginLeft:5, borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#5B7BFD', top:15}}>
                    <Text style={{  color: '#5B7BFD', left:5, fontWeight:'bold'}}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, color: '#000000', top: 15 }}>Rajesh</Text>
                <Text style={{ fontSize: 16, color: 'red', top: 15 }}> Hyd</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                    {/* <View style={{borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#DB0011', top:15}}>
                    <Text style={{ color: 'red', left:5, fontWeight:'bold'}}>- </Text>
                    </View> */}
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={{marginLeft:5, borderWidth:1, borderRadius:50, height:20, width:20, borderColor:'#5B7BFD', top:15}}>
                    <Text style={{  color: '#5B7BFD', left:5, fontWeight:'bold'}}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen18')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity>

        </View >
    );
}

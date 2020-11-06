// Mahesh
//23/10/2020
//React Native Developer
//Screen number 13

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen13({navigation }) {

    return (
        <View style={{ backgroundColor:'lightgrey', height:1000 }}>
            <View style={{ height:60, backgroundColor:'white', flexDirection:'row' }}>
            <TouchableOpacity>
                <Image source={require('../images/left_arrow.png')} style={{ height: 18,top:25, width: 23,marginLeft:20 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', top:20, textAlign: 'center', marginLeft:35 }}>Payment</Text>
            </View>
            <View style={{ height: 50, width: 400, backgroundColor:'#009EDD' }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', top:10 }}>
                    Pay Rs 400.00
                    </Text>
            </View>
            <View style={{ height: 110, width: 400,backgroundColor:'white' , marginTop:10}}>
                <Text style={{fontSize:20, color:'black', margin:10, fontWeight:'bold'}}>Cards</Text>
                <TouchableOpacity style={{margin:10, flexDirection:'row'}}>
                <Image source={require('../images/rcdoc.png')} style={{ height: 18, width: 23,marginLeft:10 }} />
                    <Text style={{marginLeft:20}}>Use a new Card</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 200, width: 400, backgroundColor: 'white', marginTop:10 }}>
            <Text style={{fontSize:20, color:'black', margin:10, fontWeight:'bold'}}>Net Banking</Text>
                <View style={{ flexDirection: 'row' , margin:10, justifyContent:'space-between'}}>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')} style={{ margin:10, height: 60, width: 60, borderWidth:1, borderColor:'red', borderRadius:50 }} />
                        <Text style={{margin:10, marginTop:0}}>ICICI Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')} style={{ margin:10, height: 60, width: 60, borderWidth:1, borderColor:'red', borderRadius:50 }} />
                        <Text style={{margin:10, marginTop:0}}>ICICI Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')} style={{ margin:10, height: 60, width: 60, borderWidth:1, borderColor:'red', borderRadius:50 }} />
                        <Text style={{margin:10, marginTop:0}}>ICICI Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')} style={{ margin:10, height: 60, width: 60, borderWidth:1, borderColor:'red', borderRadius:50 }} />
                        <Text style={{margin:10, marginTop:0}}>ICICI Bank</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ height: 110, width: 400,backgroundColor:'white' , marginTop:10}}>
                <Text style={{fontSize:20, color:'black', margin:10, fontWeight:'bold'}}>Wallets</Text>
                <TouchableOpacity style={{margin:10, flexDirection:'row'}}>
                <Image source={require('../images/rcdoc.png')} style={{ height: 18, width: 23,marginLeft:10 }} />
                    <Text style={{marginLeft:20}}>Paytm</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 110, width: 400,backgroundColor:'white' , marginTop:10}}>
                <Text style={{fontSize:20, color:'black', margin:10, fontWeight:'bold'}}>UPI</Text>
                <TouchableOpacity style={{margin:10, flexDirection:'row'}}>
                <Image source={require('../images/rcdoc.png')} style={{ height: 18, width: 23,marginLeft:10 }} />
                    <Text style={{marginLeft:20}}>Enter UPI Address here</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen14')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity>
            




        </View>


    );
}

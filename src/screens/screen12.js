// Mahesh
//21/10/2020
//React Native Developer
//Screen number 12

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen12({navigation }) {

    return (
        <View style={{ backgroundColor:'#F7F7F7' }}>

            <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 70 }}>
            <TouchableOpacity>
                <Image source={require('../images/left_arrow.png')} style={{ height: 18,top:25, width: 23,marginLeft:20}} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: 'black', top: 20, marginLeft:20 }}>
                    Wallet</Text>
                <Text style={{ fontSize: 18, color: 'black', top: 20, marginLeft:170}}>History</Text></View>
            <View style={{ height: 80, width: 395, backgroundColor: '#0487CA' }}></View>

            <View style={{ height: 350, width: 395, backgroundColor: 'white', borderRadius: 10, top: -40 }}>
                <Text style={{ color: 'black', margin: 10 }}>Recharge Packs</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color:'#000000'}}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{marginTop:100}}>
                <Text style={{ textAlign: 'center', color: 'black' }}> Your Monthly order amount is approximately</Text>
                <Text style={{ textAlign: 'center', color: 'black' }}>$0.00</Text>
            </View>

            <View style={{ height: 100, width: 395, backgroundColor: 'white', marginTop:10 }}>

                <View style={{height:40, width:150, alignSelf:'center'}}>
                    <TextInput placeholder="$ Enter Amount " style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}></TextInput>
                </View>
                <View>
                <TouchableOpacity 
                onPress={() =>  navigation.navigate('Screen13')}
                style={{ width: 250, height: 45, backgroundColor: '#0487CA', borderRadius:10, marginTop:20, alignSelf:'center'}}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white', textAlign:'center', top:15 }}>Proceed To Add Money</Text></TouchableOpacity>
            </View>
            </View>
            {/* <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen13')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity> */}


            
           

        </View>


    );
}

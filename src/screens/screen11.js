// Mahesh
//21/10/2020
//React Native Developer
//Screen number 11

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen11({navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{}}>
            <View style={{ height: 50, marginTop: 20, flexDirection:'row'}}>
               
                <TouchableOpacity>
                <Image source={require('../images/left_arrow.png')} style={{ height: 18, width: 23, top:5, marginLeft:20 }} />
                </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: 'black', textAlign: 'center',left:50}}>Edit  Plan</Text>

            </View>

            <View style={{ backgroundColor: '#F8FAFC', height: 250, width: 400 }}>
                <Image source={require('../images/brand.png')} style={{ top: 20, height: 189, alignSelf: 'center', width: 290}} />
            </View>

            <View style={{marginTop:30, flexDirection: 'row', justifyContent: 'space-between', margin:20}}>
               
                <View>
                    <Text style={{color:'black'}}>The Times Of India</Text>
                    <Text style={{ color: '#5E7BF9' }}>Rs 250.00</Text>
                </View>
                <TouchableOpacity style={{ height: 38, width: 89,borderWidth:1,borderRadius:5,  borderColor:'#5A4C4D' }}>
                    <Text style={{ color: '#5E7BF9',textAlign:'center', top:3, fontSize:18, fontWeight:'200'}}>ADD + </Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={{ height: 50,flexDirection:'row' ,width: 360, backgroundColor: '#0487CA', alignSelf: 'center', borderRadius: 10 }}>
                <Text style={{ color: 'white', alignSelf: 'center', left:20 }}>Rs 250.00</Text>
                <Text style={{ color: 'white', alignSelf: 'center', marginLeft:200 }}>Confirm</Text>

            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen12')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity>




        </View>


    );
}

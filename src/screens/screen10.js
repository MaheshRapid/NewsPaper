// Mahesh
//21/10/2020
//React Native Developer
//Screen number 10

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen10({navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{ }}>
            <View style={{ height: 30, flexDirection: 'row', justifyContent: 'space-between', margin: 20, }}>
                {/* <View><Text style={{ fontSize: 18, color: '#000000', top: 5, fontWeight:'bold' }}>Logo</Text></View> */}
                <Image source={require('../images/logo.png')} style={{ height: 30, width: 30}}></Image>
                <View><Text style={{ fontSize: 18, color: '#000000', top: 5 ,fontWeight:'bold'}}>My Plan</Text></View>
                <View style={{ height: 37, width: 87, borderColor: 'red', borderWidth: 2, borderRadius: 10, flexDirection:'row' }}>
                <Image source={require('../images/wallet.png')} style={{ height: 18,top:8, width: 23,marginLeft:10 }} />
                    <Text style={{ color: '#DB0011', alignSelf: 'center', fontWeight: 'bold', fontSize: 15 }}>1000</Text></View>
            </View>

            <View style={{ height: 50, backgroundColor: '#F9F8F8', flexDirection:'row',justifyContent:'space-around' }}>
                <TouchableOpacity>
                    <Text style={{top:10, left:10,color: '#0487CA', }}>NewsPapers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ top:10, color: 'red',borderBottomColor: 'red',borderBottomWidth:1 }}>Magazine</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{top:10,right:10, color: '#0487CA' }}>Recycle NewsPaper</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 500,margin: 20, width: 350, backgroundColor: '#FFFFFF', borderRadius: 20, marginTop:20, elevation:10 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black',textAlign:'center', marginTop:100 }}>Magazine</Text>
                <Text style={{ color: 'black' , textAlign:'center'}}>Coming Soon</Text>
                <View style={{top:320, width: 300, height: 60, backgroundColor: '#0487CA', borderRadius: 25, alignSelf:'center' }}>
                    <Text style={{ color: 'white', fontSize: 25, alignSelf: 'center', top:10 }}>Thank You</Text>
                </View>
            </View>
            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen11')}>
             <Text style={{alignSelf:'center',fontSize:20,marginTop:20}}>Next</Text>
             </TouchableOpacity>



        </View>


    );
}

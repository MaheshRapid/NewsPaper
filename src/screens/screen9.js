// Mahesh
//21/10/2020
//React Native Developer
//Screen number 9

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen9({navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{ margin: 10 }}>
            <View style={{ height: 70, flexDirection: 'row', justifyContent: 'space-between',  }}>
                <View><Text style={{ fontSize: 20, color: 'black', top: 5, margin:10 }}>My Plan</Text></View>
            </View>
            <View style={{ height: 50, backgroundColor: '#F9F8F8', flexDirection:'row',justifyContent:'space-between' }}>
                <TouchableOpacity>
                    <Text style={{top:10, left:10,color: 'red', borderBottomColor: 'red', borderBottomWidth: 1 }}>NewsPapers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ top:10, color: '#0487CA' }}>Magagine</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{top:10,right:10, color: '#0487CA' }}>Recycle NewsPaper</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ color: '#1E32FA', margin:10 }}>NewsPapers</Text>
            </View>

            <View style={{marginTop:20, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image source={require('../images/hindu.png')} style={{height:50, width:80}} />
                <View>
                    <Text  style={{color:'#4A4A4A'}}>The Times Of India</Text>
                    <Text style={{ color: '#0487CA' }}>Rs 250</Text>
                </View>
                <TouchableOpacity style={{ height: 38, width: 91,borderWidth:1,borderRadius:5,  borderColor:'grey' }}>
                    <Text style={{ color: '#0487CA',textAlign:'center', top:5, fontSize:20, fontWeight:'200'}}>ADD + </Text>
                </TouchableOpacity>

            </View>
            <View style={{borderBottomWidth:1, borderBottomColor:'grey', marginTop:10}}></View>

            <View style={{marginTop:30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={require('../images/hindu.png')} style={{height:50, width:80}} />
                <View>
                    <Text  style={{color:'#4A4A4A'}}>The Times Of India</Text>
                    <Text style={{ color: '#0487CA' }}>Rs 250</Text>
                </View>
                <TouchableOpacity style={{ height: 38, width: 91,borderWidth:1,borderRadius:5,  borderColor:'grey' }}>
                    <Text style={{ color: '#0487CA',textAlign:'center', top:5, fontSize:20, fontWeight:'200'}}>ADD + </Text>
                </TouchableOpacity>

            </View>
            <View style={{borderBottomWidth:1, borderBottomColor:'grey', marginTop:10}}></View>

            <View style={{marginTop:30, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={require('../images/hindu.png')} style={{height:50, width:80}} />
                <View>
                    <Text style={{color:'#4A4A4A'}}>The Times Of India</Text>
                    <Text style={{ color: '#0487CA' }}>Rs 250</Text>
                </View>
                <TouchableOpacity
                 onPress={() =>  navigation.navigate('Screen10')}
                style={{ height: 38, width: 91,borderWidth:1,borderRadius:5,  borderColor:'grey' }}>
                    <Text style={{ color: '#0487CA',textAlign:'center', top:5, fontSize:20, fontWeight:'200'}}>ADD + </Text>
                </TouchableOpacity>

            </View>
            <View style={{borderBottomWidth:1, borderBottomColor:'grey', marginTop:10}}></View>

            {/* <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen10')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity> */}


        </View>
        


    );
}

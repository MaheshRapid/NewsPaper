// Mahesh
//23/10/2020
//React Native Developer
//Screen number 16

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";


export default function Screen16({navigation }) {

    return (
        <View style={{}}>
            <View style={{ height: 80, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, color: 'black', top: 30, marginLeft: 50 }}>Customer List</Text>
            </View>

            <View style={{ height: 60, width: 400, backgroundColor: '#F9F8F8', flexDirection:'row', justifyContent:'space-around' }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>Customer ID</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Customer Name</Text>
                <Text style={{ fontSize: 16, color: 'black' , top:15 }}>Customer Location</Text>
            </View>

            <View style={{ height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>000001</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Mahesh Bairi</Text>
                <Text style={{ fontSize: 16, color: '#DB0011' , top:15 }}>Karimnagar</Text>
            </View>
            <View style={{ height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>000001</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Mahesh Bairi</Text>
                <Text style={{ fontSize: 16, color: '#DB0011' , top:15 }}>Karimnagar</Text>
            </View>
            <View style={{ height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>000001</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Mahesh Bairi</Text>
                <Text style={{ fontSize: 16, color: '#DB0011' , top:15 }}>Karimnagar</Text>
            </View>
            <View style={{ height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>000001</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Mahesh Bairi</Text>
                <Text style={{ fontSize: 16, color: '#DB0011' , top:15 }}>Karimnagar</Text>
            </View>
            <View style={{ height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>000001</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Mahesh Bairi</Text>
                <Text style={{ fontSize: 16, color: '#DB0011' , top:15 }}>Karimnagar</Text>
            </View>
            <View style={{ height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>000001</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Mahesh Bairi</Text>
                <Text style={{ fontSize: 16, color: '#DB0011' , top:15 }}>Karimnagar</Text>
            </View>
            <View style={{ height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 }}>
                <Text style={{ fontSize: 16, color: '#0A0909', top:15 }}>000001</Text>
                <Text style={{ fontSize: 16, color: '#0487CA', top:15  }}>Mahesh Bairi</Text>
                <Text style={{ fontSize: 16, color: '#DB0011' , top:15 }}>Karimnagar</Text>
            </View>
            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen17')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity>


        </View >
    );
}

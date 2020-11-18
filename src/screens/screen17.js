// Mahesh
//23/10/2020
//React Native Developer
//Screen number 17

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen17'

export default function Screen17({navigation }) {

    return (
        <View style={{}}>
            <View style={styles.v1}>
                <Text style={styles.t1}>Customers Request</Text>
            </View>

            <View style={styles.v2}>
                <Text style={styles.t2}>Customer Name</Text>
                <Text style={styles.t3}>Locality</Text>
                <Text style={styles.t4}> </Text>
            </View>

            <View style={styles.v5}>
            <Text style={styles.t4}>Rajesh</Text>
                <Text style={ styles.t5}> Hyd</Text>
                <View style={styles.v3}>
                   
                    <TouchableOpacity>
                    <View style={styles.v4}>
                    <Text style={styles.t6}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.v5}>
            <Text style={styles.t4}>Rajesh</Text>
                <Text style={ styles.t5}> Hyd</Text>
                <View style={styles.v3}>
                   
                    <TouchableOpacity>
                    <View style={styles.v4}>
                    <Text style={styles.t6}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.v5}>
            <Text style={styles.t4}>Rajesh</Text>
                <Text style={ styles.t5}> Hyd</Text>
                <View style={styles.v3}>
                   
                    <TouchableOpacity>
                    <View style={styles.v4}>
                    <Text style={styles.t6}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.v5}>
            <Text style={styles.t4}>Rajesh</Text>
                <Text style={ styles.t5}> Hyd</Text>
                <View style={styles.v3}>
                   
                    <TouchableOpacity>
                    <View style={styles.v4}>
                    <Text style={styles.t6}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.v5}>
            <Text style={styles.t4}>Rajesh</Text>
                <Text style={ styles.t5}> Hyd</Text>
                <View style={styles.v3}>
                   
                    <TouchableOpacity>
                    <View style={styles.v4}>
                    <Text style={styles.t6}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.v5}>
            <Text style={styles.t4}>Rajesh</Text>
                <Text style={ styles.t5}>Hyd</Text>
                <View style={styles.v3}>
                   
                    <TouchableOpacity>
                    <View style={styles.v4}>
                    <Text style={styles.t6}>+ </Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
          
            <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen18')}>
             <Text style={{alignSelf:'center',fontSize:20, marginTop:20}}>Next</Text>
             </TouchableOpacity>

        </View >
    );
}

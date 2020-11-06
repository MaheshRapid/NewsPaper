// Mahesh
//27/10/2020
//React Native Developer
//Screen number 2

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen2'

export default function Screen2({ navigation }) {
    return (
        <View style={{}}>
            <Image source={require('../images/logo.png')} style={styles.logo}></Image>
            <View style={styles.textview}>
                <Text style={styles.pnumber}>Phone Number</Text>
                <Text style={styles.pnumber2}>Enter your Phone Number or Mobile Number</Text>
            </View>
            <View style={styles.N_view}>
                <TouchableOpacity style={styles.num}>
                    <Text style={styles.text1}>+ 91 </Text></TouchableOpacity>
                <TouchableOpacity style={styles.num2}>
                    <TextInput style={styles.text2} keyboardType="number-pad" placeholder="95025587411">
                    </TextInput></TouchableOpacity>
            </View>


            <TouchableOpacity
                onPress={() => navigation.navigate('Screen3')}
                style={styles.button}>
                <Text style={styles.buttontxt}>Send Code</Text>
            </TouchableOpacity>


        </View>
    );
}



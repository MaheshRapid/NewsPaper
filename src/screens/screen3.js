
// Mahesh
//27/10/2020
//React Native Developer
//Screen number 3

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";

import styles from '../Styles/screen3'

export default function Screen3({ navigation }) {

    return (
        <View style={{}}>
            <Image source={require('../images/logo.png')} style={styles.logo}></Image>
            <View style={styles.view1}>
                <Text style={styles.txt1}>Confirmation Code</Text>
                <Text style={styles.txt2}>We sent a code to
                <Text style={styles.txt3}>9502558103 </Text>
                please enter down</Text>
            </View>
            <View style={styles.view2}>
                <TextInput style={styles.textbox} keyboardType="number-pad">
                </TextInput>
                <TextInput style={styles.textbox} keyboardType="number-pad">
                </TextInput>
                <TextInput style={styles.textbox} keyboardType="number-pad">
                </TextInput>
                <TextInput style={styles.textbox} keyboardType="number-pad">
                </TextInput>

            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.txt4}>Resend Code</Text>
            </TouchableOpacity>



            <TouchableOpacity onPress={() => navigation.navigate('Screen5')}
                style={styles.button2}>
                <Text style={styles.txt4}>Confirm Code</Text>
            </TouchableOpacity>

        </View>


    );
}


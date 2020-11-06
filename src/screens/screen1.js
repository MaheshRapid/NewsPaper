// Mahesh
//27/10/2020
//React Native Developer
//Screen number 1

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen1'

export default function Screen1({ navigation }) {

    return (
        <View>
            <ImageBackground style={styles.imageback}
                source={require('../images/paper.png')}>
                <TouchableOpacity style={styles.logo}
                    onPress={() => navigation.navigate('Screen2')}>
                    <Image source={require('../images/logo.png')}
                        style={styles.logo2}>
                    </Image>
                </TouchableOpacity>
            </ImageBackground>
        </View>

    );
}


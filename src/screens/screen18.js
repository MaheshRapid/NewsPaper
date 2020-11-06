// Mahesh
//23/10/2020
//React Native Developer
//Screen number 18

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen18'

export default function Screen18({ navigation }) {

    return (
        <View style={{}}>
            <View>
                <TouchableOpacity>
                    <Image source={require('../images/left_arrow.png')} style={styles.image1} />
                </TouchableOpacity>
            </View>

            <View style={styles.v1}>
                <Text style={styles.t1}>Customer Details</Text>
            </View>

            <View style={styles.v2}>
                <Text style={styles.t2} >Full Name</Text>
                <Text style={styles.t2} >:</Text>
                <Text style={styles.t2} >Jonathan Doe</Text>
            </View>
            <View style={styles.v2}>
                <Text style={styles.t2} >Address1</Text>
                <Text style={styles.t2} >:</Text>
                <Text style={styles.t2} >7-99,ABC, AP</Text>
            </View>
            <View style={styles.v2}>
                <Text style={styles.t2} >Address2</Text>
                <Text style={styles.t2} >:</Text>
                <Text style={styles.t2} >7-99,ABC, AP</Text>
            </View>
            <View style={styles.v2}>
                <Text style={styles.t2} >Locality</Text>
                <Text style={styles.t2} >:</Text>
                <Text style={styles.t2} >Kadapa</Text>
            </View>
            <View style={styles.v2}>
                <Text style={styles.t2} >City</Text>
                <Text style={styles.t2} >:</Text>
                <Text style={styles.t2} >Kadapa</Text>
            </View>
            <View style={styles.v2}>
                <Text style={styles.t2} >State</Text>
                <Text style={styles.t2} >:</Text>
                <Text style={styles.t2} >Telangana</Text>
            </View>

        </View >
    );
}

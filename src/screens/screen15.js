// Mahesh
//23/10/2020
//React Native Developer
//Screen number 15

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen15'

export default function Screen15({ navigation }) {

    return (
        <View style={styles.v1}>
            <View style={styles.v2}>
                <TouchableOpacity>
                    <Image source={require('../images/left_arrow.png')} style={styles.image1} />
                </TouchableOpacity>
                <Text style={styles.t1}>Profile</Text>
            </View>

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.t2}>Profile</Text>
                    <TouchableOpacity><Text style={styles.c}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={styles.d}>Eshwar Krishna</Text>
                <Text style={styles.d}>+91 9999999999</Text>
            </View>

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.t2}>Address</Text>
                    <TouchableOpacity><Text style={styles.c}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={styles.t3}>1-1-23, karimnagar, Telangana</Text>

            </View>

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.t2}>Locality</Text>
                    <TouchableOpacity><Text style={styles.c}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={styles.t3}>Kadapa</Text>
            </View>

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.t2}>City</Text>
                    <TouchableOpacity><Text style={styles.c}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.t2}>State</Text>
                    <TouchableOpacity><Text style={styles.c}>Edit</Text></TouchableOpacity>
                </View>
                <Text style={styles.t3}>Telangana</Text>
            </View>

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Text style={styles.t2}>Mobile Number</Text>
                    <TouchableOpacity
                onPress={() => navigation.navigate('Screen16')}>
                        <Text style={styles.c}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.t3}>9502558888</Text>
            </View>


           

        </View>


    );
}

// Mahesh
//23/10/2020
//React Native Developer
//Screen number 14

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen14'

export default function Screen14({ navigation }) {

    return (
        <View style={styles.v1}>
            <View style={styles.v2}>
                <Text style={styles.head}>Menu</Text>
            </View>


            <View style={styles.v3}>
                <Text style={styles.head2}>My Plan</Text>
                <TouchableOpacity><Text style={styles.d3}>
                    View Or Modift Current Subscriptions</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.v3}>
                <Text style={styles.head2}>Wallet</Text>
                <TouchableOpacity><Text style={styles.d3}>
                    View Balance credit history and Recharge Wallet</Text></TouchableOpacity>
            </View>

            <View style={styles.v3}>
                <Text style={styles.head2}>My Profile</Text>
                <TouchableOpacity><Text style={styles.d3}>
                    View Update profile and manage ring the bell option</Text></TouchableOpacity>
            </View>

            <View style={styles.v3}>
                <Text style={styles.head2}>Support</Text>
                <TouchableOpacity><Text style={styles.d3}>
                    Help on queries contact with our support team</Text></TouchableOpacity>
            </View>
            <View style={styles.v3}>
                <Text style={styles.head2}>Legal</Text>
                <TouchableOpacity><Text style={styles.d3}>
                    Privacy Policy terms and conditions</Text></TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Screen15')} style={styles.v3}>
                <Text style={styles.head2}>Logout</Text>
            </TouchableOpacity>

        </View>
    );
}

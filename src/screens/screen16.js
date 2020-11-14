// Mahesh
//23/10/2020
//React Native Developer
//Screen number 16

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen16'

export default function Screen16({ navigation }) {

    return (
        <View style={{}}>
            <View style={styles.v1}>
                <Text style={styles.head}>Customer List</Text>
            </View>

            <View style={styles.v2}>
                <Text style={styles.t1}>Customer ID</Text>
                <Text style={styles.t1}>Customer Name</Text>
                <Text style={styles.t1}>Locality</Text>
            </View>

            <View style={styles.v3}>
                <Text style={styles.t1}>000001</Text>
                <Text style={styles.t2}>Mahesh Bairi</Text>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>000001</Text>
                <Text style={styles.t2}>Mahesh Bairi</Text>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>000001</Text>
                <Text style={styles.t2}>Mahesh Bairi</Text>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>000001</Text>
                <Text style={styles.t2}>Mahesh Bairi</Text>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>000001</Text>
                <Text style={styles.t2}>Mahesh Bairi</Text>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>000001</Text>
                <Text style={styles.t2}>Mahesh Bairi</Text>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>000001</Text>
                <Text style={styles.t2}>Mahesh Bairi</Text>
                <Text style={styles.t3}>Karimnagar</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Screen17')}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>Next</Text>
            </TouchableOpacity>


        </View >
    );
}

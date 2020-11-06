// Mahesh
//20/10/2020
//React Native Developer
//Screen number 6

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen6'

export default function Screen6({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <Image source={require('../images/logo.png')} style={styles.logo}></Image>
                <View style={styles.view3}>
                    <Image source={require('../images/wallet.png')} style={styles.image} />
                    <Text style={styles.wallet_text}>1000</Text></View>
            </View>

            <ScrollView horizontal={true}>
                <View style={styles.view4}>
                    <View style={styles.card}>
                        <Text style={styles.card_text1}>Manage NewsPaper & Magagine Subscription</Text>
                        <Text style={styles.card_text2}>Register and Subscribe to your choice of NewPapers and magagines with ease</Text>
                    </View>
                    <View style={styles.card1}>
                        <Text style={styles.card_text1}>Hassle Free Payments</Text>
                        <Text style={styles.card_text2}>Make your Payments through your choice Payment Mode</Text>
                    </View>
                    
                    <View style={styles.card3}>
                        <Text style={styles.card_text1}>Recycle Old NewsPapers</Text>
                        <Text style={styles.card_text2}>Scheldule old newspaper pickup for recycling and money back</Text>
                    </View>

                </View>

            </ScrollView>
            <View style={styles.view5}>
                <Text style={styles.subscription}>Start Your Subscription Now</Text></View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Screen9')}
                style={styles.button}>
                <Text style={styles.btn_text}>My Plan</Text>
            </TouchableOpacity>

        </View>


    );
}

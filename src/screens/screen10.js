// Mahesh
//21/10/2020
//React Native Developer
//Screen number 10

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen10'

export default function Screen10({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{}}>
            <View style={styles.view1}>
                <Image source={require('../images/logo.png')} style={styles.logo}></Image>
                <View><Text style={styles.head}>My Plan</Text></View>
                <View style={styles.view2}>
                    <Image source={require('../images/wallet.png')} style={styles.image1} />
                    <Text style={styles.wallettext}>1000</Text></View>
            </View>

            <View style={styles.view3}>
                <TouchableOpacity>
                    <Text style={styles.t1}>NewsPapers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.t2}>Magazine</Text>
                </TouchableOpacity>
               <TouchableOpacity>
                    <Text style={styles.t1}>Recycle NewsPapers</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.view4}>
                <Text style={styles.text2}>Coming soon</Text>
                {/* <Text style={styles.text3}>Coming Soon</Text> */}
                <TouchableOpacity   onPress={() => navigation.navigate('Screen11')} style={styles.button}>
                    <Text style={styles.btntex}>Thank You</Text>
                </TouchableOpacity>
            </View>

        
        </View>


    );
}

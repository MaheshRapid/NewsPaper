// Mahesh
//21/10/2020
//React Native Developer
//Screen number 11

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen11'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Screen11({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{}}>
            <View style={styles.view1}>

                <TouchableOpacity>
                    <Image source={require('../images/left_arrow.png')} style={styles.image} />
                </TouchableOpacity>
                <Text style={styles.heading}>Edit  Plan</Text>

            </View>

            <View style={styles.view2}>
                <Image source={require('../images/brand.png')} style={styles.image2} />
            </View>

            <View style={styles.view3}>

                <View>
                    <Text style={styles.text1}>The Times Of India</Text>
                    <Text style={styles.text2}>Rs 250.00</Text>
                </View>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.btntext}>ADD + </Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Screen12')} style={styles.button2}>
                <Text style={styles.btntext1}>Rs 250.00</Text>
                <Text style={styles.btntext2}>Confirm</Text>
            </TouchableOpacity>



        </View>


    );
}

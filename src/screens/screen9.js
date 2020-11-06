// Mahesh
//21/10/2020
//React Native Developer
//Screen number 9

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen9'

export default function Screen9({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View><Text style={styles.heading}>My Plan</Text></View>
            </View>
            <View style={styles.view3}>
                <TouchableOpacity>
                    <Text style={styles.t1}>NewsPapers</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.t2}>Magagine</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.t3}>Recycle NewsPaper</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.head}>NewsPapers</Text>
            </View>

            <View style={styles.view4}>
                <Image source={require('../images/hindu.png')} style={styles.image} />
                <View>
                    <Text style={{ color: '#4A4A4A' }}>The Times Of India</Text>
                    <Text style={{ color: '#0487CA' }}>Rs 250</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btn_txt}>ADD + </Text>
                </TouchableOpacity>
            </View>
             <View style={styles.border}>
            </View>

            
            <View style={styles.view4}>
                <Image source={require('../images/hindu.png')} style={styles.image} />
                <View>
                    <Text style={{ color: '#4A4A4A' }}>The Times Of India</Text>
                    <Text style={{ color: '#0487CA' }}>Rs 250</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btn_txt}>ADD + </Text>
                </TouchableOpacity>
            </View>
             <View style={styles.border}>
            </View>

            
            <View style={styles.view4}>
                <Image source={require('../images/hindu.png')} style={styles.image} />
                <View>
                    <Text style={{ color: '#4A4A4A' }}>The Times Of India</Text>
                    <Text style={{ color: '#0487CA' }}>Rs 250</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() =>  navigation.navigate('Screen10')}>
                    <Text style={styles.btn_txt}>ADD + </Text>
                </TouchableOpacity>
            </View>
             <View style={styles.border}>
            </View>
        


        </View>

    );
}

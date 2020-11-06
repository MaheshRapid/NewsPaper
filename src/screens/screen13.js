// Mahesh
//23/10/2020
//React Native Developer
//Screen number 13

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen13'

export default function Screen13({navigation }) {

    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
            <TouchableOpacity>
                <Image source={require('../images/left_arrow.png')} style={styles.img1} />
                </TouchableOpacity>
                <Text style={styles.head}>Payment</Text>
            </View>
            <View style={styles.view3}>
                <Text style={styles.pay}>
                    Pay Rs 400.00
                    </Text>
            </View>
            <View style={styles.view4}>
                <Text style={styles.t1}>Cards</Text>
                <TouchableOpacity style={styles.touch}>
                <Image source={require('../images/rcdoc.png')} style={styles.img2} />
                    <Text style={styles.t2}>Use a new Card</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.view5}>
            <Text style={styles.t1}>Net Banking</Text>
                <View style={styles.view6}>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')} style={styles.img3} />
                        <Text style={styles.img_txt}>ICICI Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')} style={styles.img3} />
                        <Text style={styles.img_txt}>ICICI Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')}style={styles.img3} />
                        <Text style={styles.img_txt}>ICICI Bank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../images/icici.png')} style={styles.img3} />
                        <Text style={styles.img_txt}>ICICI Bank</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.view7}>
                <Text style={styles.h2}>Wallets</Text>
                <TouchableOpacity style={styles.btn1}>
                <Image source={require('../images/rcdoc.png')} style={styles.img4} />
                    <Text style={styles.t2}>Paytm</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.view7}>
                <Text style={styles.h2}>UPI</Text>
                <TouchableOpacity   onPress={() =>  navigation.navigate('Screen14')} style={styles.btn1}>
                <Image source={require('../images/rcdoc.png')} style={styles.img4} />
                    <Text style={styles.t2}>Enter UPI Address here</Text>
                </TouchableOpacity>
            </View>
          

        </View>


    );
}

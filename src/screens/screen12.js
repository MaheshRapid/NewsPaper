// Mahesh
//21/10/2020
//React Native Developer
//Screen number 12

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground, CheckBox } from "react-native";
import styles from '../Styles/screen12'

export default function Screen12({ navigation }) {

    return (
        <View style={styles.view1}>

            <View style={styles.view2}>
                <TouchableOpacity>
                    <Image source={require('../images/left_arrow.png')} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.head}>
                    Wallet</Text>
                <Text style={styles.head2}>History</Text></View>

            <View style={styles.view3}></View>

            <View style={styles.view4}>
                <Text style={styles.head3}>Recharge Packs</Text>

                <View style={styles.view5}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 300
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 400
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view5}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 500
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 399
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view5}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 199
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 246
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view5}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 799
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.btntext}>
                            Pay Rs 100
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>
            <View style={styles.view6}>
                <Text style={styles.t1}> Your Monthly order amount is approximately</Text>
                <Text style={styles.t1}>$0.00</Text>
            </View>

            <View style={styles.view7}>

                <View style={styles.amount}>
                    <TextInput placeholder="$ Enter Amount " style={styles.amount2}></TextInput>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Screen13')}
                        style={styles.submit}>
                        <Text style={styles.sub_txt}>Proceed To Add Money</Text></TouchableOpacity>
                </View>
            </View>

        </View>

    );
}

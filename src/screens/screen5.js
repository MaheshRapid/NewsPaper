// Mahesh
//20/10/2020
//React Native Developer
//Screen number 5

import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Image, ImageBackground, CheckBox } from "react-native";
import Screen6 from './screen6'
import styles from '../Styles/screen5'


export default function Screen5({ navigation }) {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View>

                <View style={styles.view1}>
                    <TouchableOpacity>
                        <Image source={require('../images/left_arrow.png')} style={styles.back} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Customer Registration</Text>
                </View>
               
                <View style={styles.view2}>
                    {/* <Text>Full Name</Text> */}
                    <TextInput style={styles.border1} placeholder="Enter  FullName" placeholderTextColor="grey" />
                    <TextInput style={styles.border} placeholder="Address1" placeholderTextColor="grey" />
                    <TextInput style={styles.border} placeholder="Address2" placeholderTextColor="grey" />
                    <TextInput style={styles.border} placeholder="Locality" placeholderTextColor="grey" />
                  
                  
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="City" value="11" />
                            <Picker.Item label="City" value="12" />
                        </Picker>
                   
                    
                    <View style={{ borderBottomWidth: 1, marginTop: 20, borderBottomColor: 'grey' }}/>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="State" value="11" />
                            <Picker.Item label="Karimnagar" value="12" />
                        </Picker>

                        <View style={{ borderBottomWidth: 1, marginTop: 20, borderBottomColor: 'grey' }}/>

                  
                    <TextInput style={styles.border} placeholder="Vendor Mobile Number" placeholderTextColor="grey" />
                    <View style={styles.view3}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection} />
                            <TouchableOpacity  onPress={() => navigation.navigate('Screen6')}>
                        <Text style={styles.C_Text}>Do Not Know Vendor Mobile Number</Text>
                        </TouchableOpacity>
                    </View>
                </View>
              
                <TouchableOpacity
                    onPress={() => navigation.navigate('Screen6')}
                    style={styles.button}>
                    <Text style={styles.button_text}>Register</Text>
                </TouchableOpacity>
                
              
                
                
            
        </View>
    );
};


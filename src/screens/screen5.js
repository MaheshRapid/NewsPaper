// Mahesh
//20/10/2020
//React Native Developer
//Screen number 5

import React, { useState ,useEffect} from "react";
import { View, Picker, StyleSheet, Text, TextInput,Scrollview, TouchableOpacity, Image,  ImageBackground, CheckBox } from "react-native";
import Screen6 from './screen6'


  const Screen5 = ({navigation }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [isSelected, setSelection] = useState(false);
    return (
        <View>
      
      
            <View style={{  marginTop: 10, height: 50, flexDirection:'row', marginLeft:20}}>
                <TouchableOpacity>
                <Image source={require('../images/left_arrow.png')} style={{ height: 18,top:10, width: 23, }} />
                </TouchableOpacity>
           
                <Text style={{ fontSize: 25, color: 'black',left:30 }}>Customer Registration</Text>
            </View>
            <View style={{ margin: 25 }}>
                <Text>Full Name</Text>
                <TextInput style={styles.border1} placeholder="Enter Name" placeholderTextColor="grey" />
                <TextInput style={styles.border} placeholder="Address1" placeholderTextColor="grey" />
                <TextInput style={styles.border} placeholder="Address2" placeholderTextColor="grey" />
                <TextInput style={styles.border} placeholder="Locality" placeholderTextColor="grey" />
                <View style={styles.border}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 47, color: 'grey' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="City" value="11" />
                        <Picker.Item label="City" value="12" />
                    </Picker>
                </View>
                <View style={{ borderBottomWidth: 1, marginTop: 20, borderBottomColor: 'grey' }}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 47, color: 'grey' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="State" value="11" />
                        <Picker.Item label="Karimnagar" value="12" />
                    </Picker>
                </View>
                <TextInput style={styles.border} placeholder="Verify Mobile Number" placeholderTextColor="grey" />
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection} />
                    <Text style={{ top: 7, fontWeight: 'bold', color: 'black' }}>Do Not Know Vendor Mobile Number</Text>
                </View>
            </View>
            <TouchableOpacity
             onPress={() =>  navigation.navigate('Screen6')}
            style={{ height: 50, width: 300, backgroundColor: '#0487CA', alignSelf: 'center', borderRadius: 10 }}>
                <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20, top: 10 }}>Register</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
              onPress={() =>  navigation.navigate('Screen6')}>
             <Text style={{alignSelf:'center',fontSize:20}}>Next</Text>
             </TouchableOpacity> */}

       
      
        </View>
    );
};

const styles = StyleSheet.create({
    
    border:{
        borderBottomWidth: 1, marginTop: 20, borderBottomColor: 'grey'
    },

    border1:{
        borderBottomWidth: 1, marginTop: 20, borderBottomColor: '#1E32FA'
    }

});
export default Screen5;
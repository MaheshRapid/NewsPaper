import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
view1:{
    height: 30, flexDirection: 'row', justifyContent: 'space-between', margin: 20,
},
view2:{
    height: 32, width: 62, borderColor: 'red', borderWidth: 2, borderRadius: 10, flexDirection: 'row'
},
view3:{
    height: 50, backgroundColor: '#F9F8F8', flexDirection: 'row', justifyContent: 'space-around' 
},
view4:{
    height: ('70%'), margin: 20, width: ('90%'), backgroundColor: '#FFFFFF', borderRadius: 20, marginTop: 20, elevation: 10 
},
logo:{
    height: 30, width: 30
},
head:{
    fontSize: 18, color: '#000000', top: 5, fontWeight: 'bold'
},
image1:{
    height: 15, top: 7, width: 23, marginLeft: 5 
},
wallettext:{
    color: '#DB0011', alignSelf: 'center', fontWeight: 'bold', fontSize: 12
},
t1:{
    top: 10, left: 10, color: '#0487CA',
},
t2:{
    top: 10, color: 'red', borderBottomColor: 'red', borderBottomWidth: 1, marginLeft:20
},
t3:{
    top: 10, color: 'red', borderBottomColor: '#0487CA', borderBottomWidth: 1
},
text2:{
    fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: 100 
},
text3:{
    color: 'black', textAlign: 'center'
},
button:{
    top: 335, width: ('80%'), height: ('10%'), backgroundColor: '#0487CA', borderRadius: 25, alignSelf: 'center'
},
btntex:{
    color: 'white', fontSize: 22, alignSelf: 'center', top: 9
}

});

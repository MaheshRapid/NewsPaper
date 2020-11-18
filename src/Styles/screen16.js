import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
v1:{
    height: 80, backgroundColor: 'white' 
},
 head:{
    fontSize: 20, color: 'black', top: 30, marginLeft: 50 
 },
 v2:{
    height:('10%'), width: ('100%'), backgroundColor: '#F9F8F8', flexDirection:'row',
    justifyContent:'space-evenly',
    marginLeft:-10
 },
 v3:{   
    height: 60, width: 400,  flexDirection:'row', justifyContent:'space-around', borderBottomColor:'#F9F8F8', borderBottomWidth:1 
 },
 t1:{
    fontSize: 16, color: '#0A0909', top: 15
 },
 t2:{
    fontSize: 16, color: '#0487CA', top: 15
 },
 t3:{
    fontSize: 16, color: '#DB0011', top: 15 
 },

});

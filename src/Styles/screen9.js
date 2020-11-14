import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
view1:{
    margin: 10, backgroundColor:'white',   height:('100%')
},
view2:{
    height: ('8%'), flexDirection: 'row', justifyContent: 'space-between'
},
heading:{
    fontSize: 20, color: 'black', top: 5, margin:10
},
view3:{
    height: ('7%'), backgroundColor: '#F9F8F8', flexDirection:'row',justifyContent:'space-between' 
},
view4:{
    marginTop:20, flexDirection: 'row', justifyContent: 'space-between'
},
t1:{
    top:10, left:10,color: 'red', borderBottomColor: 'red', borderBottomWidth: 1
},
t2:{
    top:10, color: '#0487CA'
},t3:{
    top:10,right:10, color: '#0487CA' 
},
head:{
    color: '#1E32FA', margin:10
},
image:{
    height:('100%'), width:('20%')
},
button:{
    height: ('90%'), width: ('21%'),borderWidth:1,borderRadius:5,  borderColor:'grey'
},
btn_txt:{
    color: '#0487CA',textAlign:'center', top:5, fontSize:15, fontWeight:'200'
},
border:{
    borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: 10 
},



});

import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
view1:{
    backgroundColor:'#F7F7F7'
},
view2:{
    flexDirection: 'row', backgroundColor: 'white', height: ('8%')
},
view3:{
    height: ('12%'), width: ('100%'), backgroundColor: '#0487CA' 
},
view4:{
    height:('45%'), width: ('100%'), backgroundColor: 'white', borderRadius: 10, top: -40
},
view5:{
    flexDirection: 'row', justifyContent: 'space-around' , marginTop:15
},
amount:{
    height:('50%'), width: ('50%'), alignSelf: 'center' 
},
amount2:{
    borderBottomWidth: 1, borderBottomColor: 'black'
},
view6:{
    marginTop: 100 
},
view7:{
    height:('10%'), width: ('100%'), backgroundColor: 'white', marginTop: 10 
},
t1:{
    textAlign: 'center', color: 'black' 
},
back:{
    height: 18,top:25, width: 23,marginLeft:20
},
head:{
    fontSize: 20, color: 'black', top: 20, marginLeft:20 
},
head2:{
    fontSize: 18, color: 'black', top: 20, marginLeft:170
},
head3:{
    color: 'black', margin: 10
},
button1:{
    height: 45, width: 140, borderWidth: 1, borderColor: '#0062E24A', borderRadius: 5
},
btntext:{
    fontWeight: 'bold', fontSize: 14, textAlign: 'center', margin: 10, color: '#000000' 
},
submit:{
    height:('70%'), width: ('70%'), backgroundColor: '#0487CA', borderRadius: 10, marginTop: 20, alignSelf: 'center'
}, sub_txt:{
    fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center', top: 15 
}
});

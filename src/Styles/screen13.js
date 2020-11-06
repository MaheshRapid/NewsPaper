import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
view1:{
    backgroundColor:'lightgrey', height:1000 
},
view2:{
    height:('7%'), backgroundColor:'white', flexDirection:'row' 
},
view3:{
    height: 50,width: ('100%'),backgroundColor:'#009EDD' 
},
view4:{
      height: ('10%'),width: ('100%'),backgroundColor:'white' , marginTop:10
},
view5:{
    height: ('18%'),  width: ('100%'), backgroundColor: 'white', marginTop:10 
},
view6:{
    flexDirection: 'row' , margin:10, justifyContent:'space-between'
},
view7:{
    height: ('10%'),  width: ('100%'), backgroundColor:'white' , marginTop:10
},
pay:{
    color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center', top:10
},
img1:{
    height: 18,top:25, width: 23,marginLeft:20
}, 
touch:{
    margin:10, flexDirection:'row'
},
img2:{
    height: 18, width: 23,marginLeft:10
},
head:{
    fontSize: 20, color: 'black', top:20, textAlign: 'center', marginLeft:35
},
t1:{
    fontSize:20, color:'black', margin:10, fontWeight:'bold'
},
t2:{
    marginLeft:20},
img3:{
    margin:10, height: 60, width: 60, borderWidth:1, borderColor:'red', borderRadius:50 
},
img4:{
    height: ('100%'), width: 23,marginLeft:10
},
img_txt:{
    margin:10, marginTop:0
},h2:{
    fontSize:20, color:'black', margin:10, fontWeight:'bold'
},
btn1:{
    margin:10, flexDirection:'row'
}


});

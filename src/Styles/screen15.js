import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
v1:{
    backgroundColor: 'lightgrey', height: ('100%')
},
v2:{
    height: 60, backgroundColor: 'white', flexDirection:'row', 
},
image1:{
    top:25, height: 18, width: 23,marginLeft:20 
},
t1:{
    fontSize: 20, color: 'black', marginLeft: 20, top:20
},
t2:{
    fontSize: 15, color: 'grey', marginLeft: 20
},
t3:{
    marginLeft: 20, fontSize: 18, color: '#000000' 
},
view1:{
    height: ('11%'), width: ('100%'), backgroundColor: 'white', marginTop: 10 
},
view2:{
    flexDirection: 'row', justifyContent: 'space-between', margin: 10, right: 10 
},
edit:{
    color: 'blue', marginLeft:220, top:18, fontSize:20
},
d:{
    marginLeft: 20, fontSize: 18, color: '#000000', 
}
 

});

import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    view1:{
        margin: 20 
    },
    view2:{
        height: ('15%'), flexDirection: 'row', justifyContent: 'space-between' 
    },
    view3:{
        height: ('40%'), width: ('18%'), borderColor: 'red', borderWidth: 2, borderRadius: 10, flexDirection:'row'
    },
    view4:{
        flexDirection: 'row' 
    },
    view5:{
        alignSelf: 'center', top: 10 
    },
    logo:{
        height: ('45%'), width: ('10%')
    },
    image:{
        height: ('40%'), width: ('30%'),top:9, marginLeft:5
    },
    wallet_text:{
        color: 'red', alignSelf: 'center', fontWeight: 'bold', fontSize: 13 
    },
    card:{
        height: 300, width: 250, backgroundColor: '#F6E9A5', borderRadius: 15
    },
    card1:{
        height: 300, width: 250, backgroundColor: '#A8DBF8', borderRadius: 15, marginLeft: 20 
    },
    card3:{
        height: 300, width: 250, backgroundColor:'#7AB875', borderRadius:15, marginLeft: 20
    },
    card_text1:{
        margin: 10, fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: '#000000', top: 20
    },
    card_text2:{
        fontSize: 17, margin: 10, textAlign: 'center', color: '#000000', top: 30
    },
    subscription:{fontSize: 15, color: '#000000', marginTop: 30},
    button:{height: 50, width: 300, backgroundColor: '#0487CA', alignSelf: 'center', borderRadius: 10, marginTop: 50 },
    btn_text:{
        color: 'white', alignSelf: 'center', fontSize: 18, top: 10 
    },
});

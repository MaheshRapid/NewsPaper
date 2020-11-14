import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    view1: {
        height: 50, marginTop: 20, flexDirection: 'row'
    },
    view2: {
        backgroundColor: '#F8FAFC',
        height: hp('30%'),
        width: wp('100%')
    },
    image: {
        height: 18, width: 23, top: 5, marginLeft: 20
    },
    image2: {
        top: 20, height: hp('20%'), alignSelf: 'center', width: wp('100%')
    },
    heading: {
        fontSize: 20, color: 'black', textAlign: 'center', left: 50
    },
    view3: {
        marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', margin: 20
    },
    text1: {
        color: 'black'
    },
    text2: {
        color: '#5E7BF9'
    }, button1: {
        height: ('90%'), width: ('22%'), borderWidth: 1, borderRadius: 5, borderColor: '#5A4C4D'
    },
    btntext: {
        color: '#5E7BF9', textAlign: 'center', top: 3, fontSize: 18, fontWeight: '200'
    },
    btntext1:{
        color: 'white', alignSelf: 'center', left:20
    },
    btntext2:{
        color: 'white', alignSelf: 'center', marginLeft:200
    },
    button2: {
        height: 50, flexDirection: 'row', width: 360, backgroundColor: '#0487CA', alignSelf: 'center', borderRadius: 10
    },

});

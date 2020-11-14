import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    logo: { height: ('10%'), width: ('10%') },
    textview: { margin: 20, marginTop: 100 },
    pnumber: { fontSize: 20, fontWeight: 'bold', color: '#222222' },
    pnumber2: { top: 10, fontSize: 15, color: '#7E7E7E' },
    N_view: { flexDirection: 'row' },
    num: { marginLeft: 20, borderWidth: 1, borderRightWidth: 0, borderColor: '#C3D3D4', height:('100%') },
    num2: { borderWidth: 1, borderColor: '#0073F7',height: ('100%'), width: ('73%') },
    text1: { alignSelf: 'center', top: 10, fontSize: 23 },
    text2: { left: 20, color: '#3D3C3A', fontSize: 23 },
    button: { height: ('10%'), width: ('80%'), alignSelf: 'center', backgroundColor: '#007AB8', margin: 20, marginTop: 50 },
    buttontxt: { color: 'white', textAlign: 'center', top: 15 }
});

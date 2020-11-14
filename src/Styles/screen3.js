import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    logo: { height: ('9%'), width: ('10%')},
    view1: { margin: 20, marginTop: 100 },
    view2: { flexDirection: 'row' },
    txt1: { fontSize: 20, fontWeight: 'bold', color: '#222222' },
    txt2: { top: 10, fontSize: 15, color: '#7E7E7E' },
    txt3: { color: '#0073F7' },
    txt4: { color: '#7E7E7E', textAlign: 'center', top: 15 },
    button: { alignSelf: 'center', margin: 20, marginTop: 50},
    button2: { alignSelf: 'center', height: ('10%'), width: ('85%'), backgroundColor: '#E4E7ED', margin: 20, marginTop: 50 },
    textbox: { borderRadius: 4, textAlign: 'center', marginLeft: 20, borderWidth: 1, borderColor: '#C3D3D4', height: ('100%'), width:  ('18%') }
});

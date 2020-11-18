import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    border: {
        borderBottomWidth: 1, marginTop: 20, borderBottomColor: 'grey'
    },

    border1: {
        borderBottomWidth: 1, marginTop: 20, borderBottomColor: '#1E32FA'
    },
    back: { height: ('40%'), top: 10, width: 23, },
    view1: {
        marginTop: 10, height: 50, flexDirection: 'row', marginLeft: 20
    },
    view2: { margin: 10 },
    view3: {
        flexDirection: 'row', marginTop: 10
    },
    heading: {
        fontSize: 25, color: 'black', left: 30
    },
    picker:
    {
        height: ('5%'), color: 'grey', marginTop: 15
    },

    C_Text: {
        marginTop: 5, fontWeight: 'bold', color: 'black'
    },
    button: {
        height: ('7%'), width: ('80%'), backgroundColor: '#0487CA', alignSelf: 'center', borderRadius: 10
    },
    button_text: {
        color: 'white', alignSelf: 'center', fontSize: 20, top: 8
    },


});

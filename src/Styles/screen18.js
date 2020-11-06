import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    image1: {
        left: 20, height: 18, marginTop: 30, width: 23,
    },
    v1: {
        height: 60, width: 400, backgroundColor: '#F9F8F8', marginTop: 20
    },
    v2: {
        marginTop: 20, alignSelf: 'center', borderBottomWidth: 1, borderBottomColor: 'blue', height: 30, width: 330, flexDirection: 'row', justifyContent: 'space-around'
    },
    t1: {
        fontSize: 25, textAlign: 'center', color: '#000000', top: 15, marginLeft: 20
    },
    t2: {
        fontSize: 20
    }
});

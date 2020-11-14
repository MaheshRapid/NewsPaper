import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    v1: {
        height: 80, backgroundColor: 'white'
    },
    v2: {
        height: 60, width: 400, backgroundColor: '#F9F8F8', flexDirection: 'row'
    },
    v3: {
        flexDirection: 'row'
    },
    v4: {
        marginLeft: 5, borderWidth: 2, borderRadius: 50, height: 25, width: 25, borderColor: '#5B7BFD', top: 15
    },
    v5: {
        height: 50, width: 400, flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: 'grey', borderBottomWidth: 1
    },
    t1: {
        fontSize: 20, color: '#000000', top: 30, marginLeft: 30
    },
    t2: {
        fontSize: 16, color: '#000000', top: 15, marginLeft: 20
    },
    t3: {
        fontSize: 16, color: '#262C2E', top: 15, marginLeft: 40
    },
    t4: {
        fontSize: 16, color: '#000000', top: 15
    },
    t5: {
        fontSize: 16, color: 'red', top: 15
    },
    t6: {
        color: '#5B7BFD', left: 7, fontWeight: 'bold', fontSize:14
    }

});

import { StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    v1: {
        margin: 20
    },
    v2: {
        height: 80, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#F7F7F7'
    },
    v3: {
        height: 70, width: 350, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#F7F7F7'
    },
    head: {
        fontSize: 20, color: 'black', top: 20, fontWeight: 'bold'
    },
    head2: {
        fontSize: 15, color: 'black', margin: 10, fontWeight: 'bold'
    },
    d3: {
        marginLeft: 10
    }

});

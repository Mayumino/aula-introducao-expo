import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkblue',
        borderRadius: 5,
        padding: 8,
        alignItems: 'center',
    },

    titulo: {
        fontSize: RFPercentage(4),
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        //padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'yellow',
        borderColor: 'yellow',
        borderRadius: 20,
        fontWeight: 'bold',
    },

    texto: {
        fontSize: RFPercentage(2.2),
        color: '#fafafa',
        fontWeight: 'bold'
    },

    text2: {
        fontSize: RFPercentage(1.5),
        color: '#fafafa'
    },
});

export default styles;
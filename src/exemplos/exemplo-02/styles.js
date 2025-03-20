import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
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
        color: 'darkslategray',
        borderColor: 'darkslategray',
        borderRadius: 20,
        fontWeight: 'bold',
    },

    /*text: {
        fontSize: RFPercentage(2.2),
    },*/

    imagem: {
       // height: RFPercentage(16),
       // width: RFPercentage(48),
       width: '100%',
       //height: '100%',
       resizeMode: 'contain',
    },
});

export default styles;
import { StyleSheet } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
        container: {
            flex: 3,
            backgroundColor: '#fafafa',
            borderRadius: RFPercentage(1.5),
            padding: RFPercentage(1),
            width:'100%',
            marginBottom: RFPercentage(1),
        },

    titulo: {
        fontSize: RFPercentage(2),
        marginTop: RFPercentage(0.5),
        marginBottom: RFPercentage(1),
        padding: RFPercentage(1.5),
        width: '100%',
        textAlign: 'left',
        color: '#333',
        fontWeight: 'bold',
    },

    /*text: {
        fontSize: RFPercentage(2.2),
    },*/

    imagemContainer: {
        flexDirection: 'row',
        alignItems: 'left',
        marginBottom: 50,
        borderWidth: RFPercentage(0.5),
        borderColor: 'darkgreen',
        borderRadius: RFPercentage(1.5),
        
    },

    imagem: {
       height: RFPercentage(10),
        width: RFPercentage(8),
        padding:10,
       resizeMode: 'cover',
       marginLeft: RFPercentage(1),
    },
});

export default styles;
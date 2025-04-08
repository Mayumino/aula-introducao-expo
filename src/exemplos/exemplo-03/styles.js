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

    texto: {
        fontSize: RFPercentage(2.2),
        marginBottom: RFPercentage(2)
    },

    

    valor: {
        color: 'darkslategray',
        fontSize: RFPercentage(4),
    },

    botao: {
        backgroundColor:'darkslategray',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(1),
    },

    txtBotao: {
        fontSize: RFPercentage(2),
        color:'#fafafa',
    }
});

export default styles;
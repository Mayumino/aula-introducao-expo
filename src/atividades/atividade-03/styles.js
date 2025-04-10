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
        fontSize: RFPercentage(3),
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        //padding: 8,
        width: '70%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#f3f3f3',
        borderColor: 'darkslategray',
        backgroundColor: 'darkslategray',
        borderRadius: 20,
        fontWeight: 'bold',
    },

    texto: {
        fontSize: RFPercentage(2.2),
        marginBottom: RFPercentage(2)
    },

    

    valor: {
        color: '#333',
        fontSize: RFPercentage(12)
    },

    botaomais: {
        backgroundColor:'#009900',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(1),
    },
    
    botaomenos: {
        backgroundColor:'#990000',
        width: '75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1.5),
        alignItems: 'center',
        justifyContent: 'center',
        margin: RFPercentage(1),
    },

    botaoreseta: {
        backgroundColor:'#333',
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

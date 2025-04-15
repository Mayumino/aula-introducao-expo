import { StyleSheet, TextInput } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        borderRadius: 5,
        padding:20,
        //alignItems: 'center',
    },

    titulo: {
        fontSize: RFPercentage(3),
        marginTop: 20,
        //marginBottom: 5,
        padding: RFPercentage(1.5),
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#f3f3f3',
        borderColor: 'darkslategray',
        backgroundColor:'darkslategray',
        borderRadius: RFPercentage(4),
        fontWeight: 'bold',
    },

    texto: {
        fontSize: RFPercentage(3),
        color: 'red',
        fontWeight: 'bold',
        marginBottom: RFPercentage(2),
    },
    
    txtInput: {
        borderColor: 'lightgray',
        color: 'black',
        borderWidth: RFPercentage(0.2),
        borderRadius: RFPercentage(2),
        width: '100%',
        fontSize: RFPercentage(2.2),
        marginVertical: RFPercentage(1.5),
        boxShadow: '1px 1px gray',
    },

    nomesobrenome: {
        fontSize: RFPercentage(2),
        textAlign: 'left',
        fontWeight: 'bold',
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
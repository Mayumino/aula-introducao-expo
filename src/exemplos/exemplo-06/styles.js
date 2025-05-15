import { StyleSheet, TextInput } from 'react-native';

import { RFPercentage } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        borderRadius: 5,
        padding:20,
        //alignItems: 'center',
    },

    titulo: {
        fontSize: RFPercentage(3),
        marginTop: 20,
        marginBottom: 40,
        padding: RFPercentage(1.5),
        width: '100%',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#f3f3f3',
        //borderColor: 'darkslategray',
        //backgroundColor:'darkslategray',
        //borderRadius: RFPercentage(4),
        fontWeight: 'bold',
    },

    resultado: {
        fontSize: RFPercentage(4),
        color: '#f3f3f3',
        fontWeight: 'bold',
        marginBottom: RFPercentage(2),
        backgroundColor: '#333',
        width: '100%',
        textAlign: 'center',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(2),
    },
    
    numeroInput: {
        borderColor: 'lightgray',
        borderWidth: RFPercentage(0.2),
        borderRadius: RFPercentage(2),
        width: '100%',
        fontSize: RFPercentage(2.2),
        marginVertical: RFPercentage(1.5),
        boxShadow: '1px 1px gray',
        color: '#f3f3f3',
        textAlign:'center',
    },

    numeros: {
        fontSize: RFPercentage(2),
        textAlign: 'left',
        fontWeight: 'bold',
        color: '#f3f3f3',
    },

    botaocontainer: {
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
    },

    botao: {
        backgroundColor:'darkslategray',
        width: '80%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1.5),
        alignSelf: 'center',
        justifyContent: 'center',
        margin: RFPercentage(1),
        gap: RFPercentage(0.5),
    },

    txtBotao: {
        fontSize: RFPercentage(2),
        color:'#fafafa',
        alignSelf: 'center'
    },

    categoria: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fef3f3',
        marginVertical: 3,
        textAlign: 'center',
    },
    

});

export default styles;
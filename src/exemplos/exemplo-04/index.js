import { useState } from 'react';
import { View , Text , TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo04 () {

    const [txtDigitado, setTxTDigitado] = useState('');
    const [valorVisualizar, setValorVisualizar] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
            <Text style={styles.texto}>{txtDigitado}</Text>

            <TextInput style={styles.txtInput} onChangeText={(valorTxtInput) => setTxTDigitado(valorTxtInput)}/>

            <Text>Exemplo exibição valor digitado por botão</Text> 
            <Text>{valorVisualizar}</Text>   
            <TouchableOpacity style={styles.botao} onPress={() => setValorVisualizar(txtDigitado)}>
                <Text style={styles.txtBotao}>Visualizar valor digitado</Text>
            </TouchableOpacity>
        </View>
    );   
}

export default Exemplo04;
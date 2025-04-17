import { useState } from 'react';
import { View , Text , TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade04 () {

    const [txtNome, setTxTNome] = useState('');
    const [txtSobrenome, setTxTSobrenome] = useState('');
    const [valorVisualizar, setValorVisualizar] = useState('');

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>
            <Text style={styles.texto}>{valorVisualizar}</Text> 

            <Text style={styles.nomesobrenome}>Nome:</Text>
            <TextInput
                style={styles.txtInput}
                value={txtNome}
                onChangeText={(valorTxtNome) => setTxTNome(valorTxtNome)}
            />

            <Text style={styles.nomesobrenome}>Sobrenome:</Text>
            <TextInput
                style={styles.txtInput}
                value={txtSobrenome}
                onChangeText={(valorTxtSobrenome) => setTxTSobrenome(valorTxtSobrenome)}
            />
              
            <TouchableOpacity style={styles.botao}
            onPress={() => {
                const nomeCompleto = [txtNome, txtSobrenome].filter(Boolean).join(' ');
                setValorVisualizar(nomeCompleto);
                setTxTNome('');
                setTxTSobrenome('');
            }}>
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </TouchableOpacity>
        </View>
    );   
}

export default Atividade04;
import { useState } from 'react';
import { View , Text , TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo05 () {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function somar() {
        const soma = parseInt(n1) + parseInt(n2);
        setTotal(soma.toString());
    }

    function subtrair() {
        const subtrair = parseInt(n1) - parseInt(n2);
        setTotal(subtrair.toString());
    }

    function multiplicar() {
        const multiplicar = parseInt(n1) * parseInt(n2);
        setTotal(multiplicar.toString());
    }

    function dividir() {
        const dividir = parseInt(n1) / parseInt(n2);
        setTotal(dividir.toString());
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.numeros}>Insira um número:</Text>
            <TextInput
                style={styles.numeroInput}
                value={n1}
                onChangeText={(valorN1) => setN1(valorN1)}
            />
      
      <View style={styles.botaocontainer}>
            <TouchableOpacity style={styles.botao}
            onPress={() => somar()}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => subtrair()}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => multiplicar()}>
                <Text style={styles.txtBotao}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao}
            onPress={() => dividir()}>
                <Text style={styles.txtBotao}>/</Text>
            </TouchableOpacity>
            </View>

            <Text style={styles.numeros}>Insira um número:</Text>
            <TextInput
                style={styles.numeroInput}
                value={n2}
                onChangeText={(valorN2) => setN2(valorN2)}
            />
<Text style={styles.resultado}>{total}</Text> 
        </View>


    );   
}

export default Exemplo05;
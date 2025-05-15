import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo06() {
    const [massa, setMassa] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(0);
    const [categoria, setCategoria] = useState('');

    function imc() {
        const peso = parseFloat(massa);
        const alturaMetros = parseFloat(altura);

        if (!isNaN(peso) && !isNaN(alturaMetros) && alturaMetros > 0) {
            const imcCalculado = peso / (alturaMetros * alturaMetros);
            setResultado(imcCalculado);

            // Definindo a categoria
            let cat = '';
            if (imcCalculado < 18.5) {
                cat = 'Abaixo do peso';
            } else if (imcCalculado < 25) {
                cat = 'Peso normal';
            } else if (imcCalculado < 30) {
                cat = 'Sobrepeso';
            } else if (imcCalculado < 35) {
                cat = 'Obesidade grau I';
            } else if (imcCalculado < 40) {
                cat = 'Obesidade grau II';
            } else {
                cat = 'Obesidade grau III';
            }

            setCategoria(cat);
        } else {
            setResultado(0);
            setCategoria('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculadora IMC</Text>

            <Text style={styles.resultado}>{resultado.toFixed(2)}</Text>
            {categoria !== '' && <Text style={styles.categoria}>{categoria}</Text>}

            <Text style={styles.numeros}>Insira o seu peso:</Text>
            <TextInput
                style={styles.numeroInput}
                value={massa}
                onChangeText={(entrada) => setMassa(entrada)}
                keyboardType="numeric"
            />

            <Text style={styles.numeros}>Insira a sua altura:</Text>
            <TextInput
                style={styles.numeroInput}
                value={altura}
                onChangeText={(entrada) => setAltura(entrada)}
                keyboardType="numeric"
            />

            <View style={styles.botaocontainer}>
                <TouchableOpacity style={styles.botao} onPress={imc}>
                    <Text style={styles.txtBotao}>Calcular IMC</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Exemplo06;

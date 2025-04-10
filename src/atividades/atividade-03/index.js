import { useState } from 'react'
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero+1);
    }

    function handleDecrementa() {
        setNumero(numero-1);
    }

    function handleReseta() {
        setNumero(numero*0);
    }

    return (
        <View style={styles.container}>
          <Text style={styles.titulo}>Atividade 03</Text>
    
        {/* TouchableOpacity Example */}
      <Text style={styles.valor}>{numero}</Text>
      <TouchableOpacity style={styles.botaomais} onPress={handleIncrementa}>
        <Text style={styles.txtBotao}>+1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaomenos} onPress={handleDecrementa}>
        <Text style={styles.txtBotao}>-1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoreseta} onPress={handleReseta}>
        <Text style={styles.txtBotao}>Resetar</Text>
      </TouchableOpacity>

      
        </View>
      );

}

export default Atividade03;
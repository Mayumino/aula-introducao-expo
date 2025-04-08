import { useState } from 'react'
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';

function Exemplo03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero+1);
    }
  
  function handleExibeButton() {
    Alert.alert('Alerta', 'Alguém clicou no botão!');
  }

  const handleExibeButton2 = () => {
    Alert.alert(
      'Alerta',
      'Alguém clicou no botão!',
      [
        {
          text: 'Sim',
          onPress: () => Alert.alert('Mensagem', 'Clicou em Sim.'),
          style: 'default',
        },
        {
          text: 'Não',
          onPress: () => Alert.alert('Mensagem', 'Clicou em Não.'),
          style: 'default',
        },
        {
          text: 'Cancelar',
          onPress: () => Alert.alert('Mensagem', 'Clicou em Cancelar.'),
          style: 'default',
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 03</Text>
      <Text style={styles.texto}>Variáveis e State</Text>

      <Button
        title="Não clique!"
        color={'darkslategray'}
        onPress={handleExibeButton2}
      />

      {/* TouchableOpacity Example */}
      <Text style={styles.valor}>{numero}</Text>
      <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
        <Text style={styles.txtBotao}>+1</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Exemplo03;

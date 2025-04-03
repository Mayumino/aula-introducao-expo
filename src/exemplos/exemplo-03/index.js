import { View , Text , Button, Alert } from 'react-native';

import styles from './styles';

function Exemplo03 () {

    function handleExibeButton () {
        Alert.alert('alerta', 'Alguém clicou no botão!')
    }

    const handleExibeButton2 = () => {
        Alert.alert('alerta', 'Alguém clicou no botão!',
            [
                {
                    text: 'Sim',
                    onPress: () => Alert.alert('Mensagem', 'Clicou em sim.'),
                    style: 'default'

                    {
                        text: 'Não',
                        onPress: () => Alert.alert('Clicou em nim.'),
                        style: 'default'
                    }

                    {
                        text: 'Cancelar',
                        onPress: () => Alert.alert('Mensagem', 'Clicou em sim.'),
                        style: 'default'
                    }
                }
            ]
        )
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 03</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <Button
                title='Não clique!'
                color={'darkslategray'}
                onPress={handleExibeButton}
            />
                
           
        </View>
    );   
}

export default Exemplo03;
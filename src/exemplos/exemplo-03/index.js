import { View , Text , Button, Alert } from 'react-native';

import styles from './styles';

function Exemplo03 () {

    function handleExibeButton () {
        Alert.alert('alerta', 'Alguém clicou no botão!')
    }

    const handleExibeButton2 () => {
        Alert.alert('alerta', 'Alguém clicou no botão!')
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
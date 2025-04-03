import { View, Text } from 'react-native'; 

import styles from './styles';

import camisaGremio from '../../../assets/gremio1.png'
import Card from './card';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade02</Text>            

            <Card 
                titulo={'Camiseta nº 1'} 
                descricao={'Camisa de jogo titular'} 
                valor={'350,00'}
                img={camisaGremio}
            />
           
        </View>
    );
}

export default Atividade02;
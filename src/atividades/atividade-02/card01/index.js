import { View , Text , Image } from 'react-native';

import styles from './styles';
import img from '../../../../assets/gremio1.png';

function Card01() {
    return(
        <View style={styles.container}>
            <View style={styles.imagemContainer}>
            <Image source={img} style={styles.imagem}/>
            <Text style={styles.titulo}>Camisa Grêmio</Text>
            <Text style={styles.mensagem}>Atualize o estilo com o novo manto do Tricolor Gaúcho. A Camisa Grêmio III 24/25 s/n° Torcedor Umbro é uma edição comemorativa dos 70 anos do Estádio Olímpico Monumental</Text>
            </View>
        </View>
    );
}

export default Card01;
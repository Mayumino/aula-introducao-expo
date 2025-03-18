import { View , Text } from 'react-native';

import styles from './styles';

function Atividade01 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 1</Text>
            <Text style={styles.texto}>Aula PAM I, primeiro componente</Text>
            <Text></Text>
            <Text style={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

        </View>
    );   
}

export default Atividade01;
import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade_4() {

    const [txtEscrito, setTxtEscrito] = useState('');
    const [mensagem, setMensagem] = useState('Insira nome e Sobrenome');
    const [txtTela, setTxtTela] = useState('');

    function handleExibeTxt(txt) {
        setTxtEscrito(txt)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.texto}> {mensagem} </Text>
            
            <Text style={styles.nome}>Nome</Text>

            <TextInput 
            style={styles.input} 
            onChangeText={(valor) => handleExibeTxt(valor)}
            />

            <Text style={styles.sobrenome}>Sobrenome</Text>
           
             <TextInput
             style={styles.input}
                           
             />

             <Pressable 
            style={({ pressed }) => pressed ? [styles.botao, styles.botaoPress] : styles.botao}
            onPress={() => setMensagem(txtEscrito)}    
            >
                Exibir Texto
            </Pressable>
        </View>
    )
}

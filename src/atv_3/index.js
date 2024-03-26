import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

export default function Atividade_3 () {

    const [numero, setNumero] = useState(0);

    function mensagem() {
        alert('Ola, Mundo!')
    };
    function incrementar() {
        setNumero(numero + 1);
    }; 
    function decrementar() {
        setNumero(numero - 1);
    }
    function zerar() {
        setNumero(numero - numero);
    }
 
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
        
            <TouchableOpacity style={styles.botaoOla} onPress={() => mensagem()} >
                <Text style={styles.txtBotaoOla}>Diga, "Olá, Mundo"</Text>
            </TouchableOpacity>
            
            <View style={styles.container1}>  
            <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                <Text style={styles.txtBotao}>+</Text>
            </TouchableOpacity>
            
            <Text style={styles.titulonum}>{numero}</Text>

            <TouchableOpacity style={styles.botao} onPress={() => decrementar()}>
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.btZerar}>
            <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                <Text style={styles.txtBotao}>Zerar</Text>

            </TouchableOpacity>
            </View>
        </View>
    );
}
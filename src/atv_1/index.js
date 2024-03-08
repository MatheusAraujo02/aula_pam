import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; 

import logo from 'D:/TEMP/matheusaraujo/aula_pam/assets/002-1-react-native.png';

import styles from './styles';

const Saudacoes =(props) =>{
  return(
    <text style={styles.texto}>
      Olá {props.name}!
    </text>
  );
}

export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.paragraph}>
                Exemplo 2
            </Text>

            <Saudacoes name='Mario' />
            <Saudacoes name='Maria' />
            <Saudacoes name='Bruna' />
            <Saudacoes name='Bruno' />
        </View>
    );
}
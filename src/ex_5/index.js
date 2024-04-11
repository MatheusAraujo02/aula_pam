import { useState} from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function Exemplo_5() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    return(
        <View style={styles.container}>
            <Text style ={style.titulo}> Exemplo5 </Text>

            <Text style={style.txtSaida}> Calculadora básica </Text>

            <Text style={style.textLabel}> 1° número </Text>
            <TextInput
                style={
                    [
                        style.txtEntrada,
                            isFocusN1 ?
                                {
                                    borderColor: '#C51162',
                                    outline: 'none',
                                }
                        :
                        {}
                    ]
                }
                onFocus={() => setIsFocusN1(true)}
                onBlur={() => setIsFocusN1(false)}
                onChangeText={(num1) => setN1(num1)}
                value={n1}
                // keyboardType='numeric'

            />
            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º número </Text> 
            TextInput
                style={
                    [
                        style.txtEntrada,
                            isFocusN2 ?
                                {
                                    borderColor: '#C51162',
                                    outline: 'none',
                                }
                        :
                        {}
                    ]
                }
                onFocus={() => setIsFocusN2(true)}
                onBlur={() => setIsFocusN2(false)}
                onChangeText={(num2) => setN2(num2)}
                value={n2}

            <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

            <Text style={styles.txtLabel}> Total </Text>
            <TextInput
                style={
                    [
                        style.txtEntrada,
                            isFocusTotal ?
                                {
                                    borderColor: '#C51162',
                                    outline: 'none',
                                }
                        :
                        {}
                    ]
                }
                onFocus={() => setIsFocusTotal(true)}
                onBlur={() => setIsFocusTotal(false)}
                editable={false}
                value={total ? parseFloat(total).toFixed(2) : ''}
            />
            
            <Pressable
                onPress={() => soma()}
                style={
                    ({pressed}) => pressed ?
                    [styles.button, styles.buttonTouch]
                :
                    styles.button
                } 
            >
                <Text style={styles.textButton}> + </Text>
            </Pressable>
        </View>
    );
}

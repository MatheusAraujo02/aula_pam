import { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Input from './input';
import Botao from './botao';

export default function Exemplo_6 (){

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [imc, setImc] = useState(0.00);

    function calculaImc () {
        setImc(peso / (altura*altura));
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 6</Text>
            <View style={styles.ladoalado}>
                <Input placeholder='Peso' valor={peso} atualizaValor={setPeso}  />
                <Input placeholder='Altura' valor={altura} atualizaValor={setAltura}  />
            </View>

            <Text style={styles.imc}>{imc.toFixed(2)}</Text>

            <Botao calcular={calculaImc}>Calcular</Botao>
        </View>

    )
}

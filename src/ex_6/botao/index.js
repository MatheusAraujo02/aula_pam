import { Pressable, Text } from "react-native";

import styles from "./styles";

export default function Botao ({children, calcular, mensagemImc}) {
    return (
        <Pressable 
            style=
                {({ pressed }) => pressed ? 
                    [styles.botao, styles.btnPress]
                :
                    styles.botao
            }

            onPress={() =>[ calcular(), mensagemImc ()]}
        >   
            <Text style={styles.txtBotao}> {children} </Text>
        </Pressable>
    )
}
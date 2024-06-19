import { View, Pressable, Text } from 'react-native';

export default function Exemplos({ navigation }) {
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Ex2')}>
                <Text> Exemplo2</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex3')}>
                <Text> Exemplo3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex4')}>
                <Text> Exemplo4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Ex5')}>
                <Text> Exemplo5</Text>
            </Pressable>
        </View>
    )
}
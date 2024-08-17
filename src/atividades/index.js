import { View, Pressable, Text } from 'react-native'; 

export default function Atividades({ navigation }) {
    return(
        <View>
            <Pressable onPress={() => navigation.navigate('Atv_1')}>
                <Text>Atividade 1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv_3')}>
                <Text>Atividade 3</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv_4')}>
                <Text>Atividade 4</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Atv_5')}>
                <Text>Atividade 5</Text>
            </Pressable>
            {/* <Pressable onPress={() => navigation.navigate('Atv6')}>
                <Text>Atividade 6</Text>
            </Pressable> */}
        </View>
    );
}
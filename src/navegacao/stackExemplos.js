import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Exemplos from '../exemplos';
import Exemplo2 from '../ex_2';
import Exemplo_3 from '../ex_3';
import Exemplo_4 from '../ex_4';
import Exemplo_5 from '../ex_5'; 

const Stack = createNativeStackNavigator();

export default function NavegacaoStackEx() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Exemplos" component={Exemplos} />
            <Stack.Screen
                name="Ex2"
                component={Exemplo2}
                options={{ title: 'Exemplo 2' }}
            />
            <Stack.Screen name="Ex3" component={Exemplo_3} />
            <Stack.Screen name="Ex4" component={Exemplo_4} />
            <Stack.Screen name="Ex5" component={Exemplo_5} />
        </Stack.Navigator>
    );
}

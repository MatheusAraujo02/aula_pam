import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#ffcdd2',
        padding: 8,
    },
    titulo: {
        fontSize: 30,
        fontWeight:'bold',
        color: '#b71c1c',
        margin: 20,
        marginBottom: 40,

    },
    texto: {
        fontSize: 25,
        marginVertical: 10,
        padding: 5,
        color: '#b71c1c'
    },
    nome: {
        marginRight: '71%', 
    },
    sobrenome: {
        marginRight: '67%'
    },
    input: {          
        fontSize: 25,
        width: '80%',
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#b71c1c',
        borderRadius: 20,
       margin: 3,
    },
    linha: {    
        borderBottomWidth: 3,
        borderColor: '#b71c1c',
        marginVertical: 20,
        width: '100%',
    },
    botao: {
        width: '80%',
        padding: 16,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#b71c1c',
        marginVertical: 20,
    },
    botaoPress: {
        backgroundColor: '#fff',

    },
    txtBotao: {
        color: '#ff2cdd2',
        fontSize: 20,
    },
    txtBotaoPress: {
        color: '#b71c1c',

    }

})

export default styles;
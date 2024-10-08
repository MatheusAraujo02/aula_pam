import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#EEE',
        padding: 8,
        alignItems:'center',
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    titulo: {
        margin: 6,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#AAA'
    },
    ladoalado: {
        flexDirection: 'row',
        marginVertical: 30,
    },
    imc: {
        color: 'lightgray',
        fontSize: 65,
        marginVertical: 15,
    },
    mensagem: {
        fontSize: 40,

    },
})

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       width: '50%',
       borderWidth: 1,
       justifyContent: 'center',
       backgroundColor: '#E2F2FD',
       padding: 10,
       marginBottom: 8,
       marginTop: 8,
       alignItems: 'center',
    },  
    paragraph: {
        margin: 15,
        fontSize: 18,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1565C0',
    },
    image: {
        width: '100%',
        height: '15%',
        margin: 10,
    },
    texto: {
        fontSize: 25,
       textAlign: 'center',
       padding: 10,
    }
});

export default styles;
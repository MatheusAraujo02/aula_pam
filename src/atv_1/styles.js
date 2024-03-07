import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       width: '100%',
       borderWidth: 1,
       justifyContent: 'center',
       backgroundColor: '#E2F2FD',
       padding: 10,
       marginBottom: 8,
       alignItems: 'center',
    },  
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1565C0',
    },
    image: {
        width: '90%',
        height: '15%',
        margin: 10,
    },
    texto: {
        fontSize: 25,
       textAlign: 'center',
       padding: 8,
    }
});

export default styles;
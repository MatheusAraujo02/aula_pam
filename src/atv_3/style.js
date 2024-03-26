import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fafafa',
       width: '100%',
       borderRadius: 20, 
       alignItems: 'center',
       padding: 20,
    
},

container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '10%',


},
titulo: {
    fontSize: 30,
    fontWeight: 'bold',
},

titulonum: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,

},
botaoOla: {
    alignItems: 'center',
    width: 'auto',
    padding: 10,
    margin: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 20,
},
txtBotaoOla: {
    fontSize: 25,
    color: '#fafafa'
},

botao: {
    alignItems: 'center',
    width: '100%',
    padding: 3,
    margin: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    borderRadius: 10,
    
},
txtBotao: {
    fontSize: 25,
    color: '#fafafa'
    
},
btZerar: {
    width: 'auto',
    alignItems: 'center',
},


});

export default styles;
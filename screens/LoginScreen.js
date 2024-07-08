import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.title}>TELA DE LOGIN</Title>
      <TextInput
        label="E-MAIL"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="SENHA"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" style={styles.button}>
        ENTRAR
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 15,
  },
  button: {  
    width: '90%',
  },
});

export default LoginScreen;

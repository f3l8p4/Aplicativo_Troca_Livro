import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const UsersRegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO USUARIO</Text>
      <TextInput
        label="NOME"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="DATA DE NASCIMENTO"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="CPF"
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="ENDEREÇO"
        mode="outlined"
        style={styles.input}
      />
      <Button mode="contained" style={styles.button}>
        REGISTRAR
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  input: {
    width: '90%',
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    width: '90%',
    paddingVertical: 10,
  },
});

export default RegisterScreen;

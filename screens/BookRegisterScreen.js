// BookRegisterScreen.js
import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import ModalSelector from 'react-native-modal-selector';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BookContext } from '../db/BookContexts';

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  genero: yup.string().required('Gênero é obrigatório'),
  formaPagamento: yup.string().required('Forma de pagamento é obrigatória'),
  descricao: yup.string().required('Descrição é obrigatória'),
});

const BookRegisterScreen = ({ route, navigation }) => {
  const { books, setBooks } = useContext(BookContext);
  const book = route.params?.book || null;
  const isEdit = !!book;

  const { control, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: '',
      genero: '',
      condicao: 'Novo',
      transacao: 'Troca',
      formaPagamento: '',
      descricao: '',
    },
  });

  useEffect(() => {
    if (isEdit) {
      setValue('nome', book.nome);
      setValue('genero', book.genero);
      setValue('condicao', book.condicao);
      setValue('transacao', book.transacao);
      setValue('formaPagamento', book.formaPagamento);
      setValue('descricao', book.descricao);
    }
  }, [book, isEdit, setValue]);

  const onSubmit = (data) => {
    if (isEdit) {
      const updatedBooks = books.map(b => (b.id === book.id ? { ...b, ...data } : b));
      setBooks(updatedBooks);
    } else {
      const newBook = { ...data, id: books.length + 1, foto: 'https://www.w3schools.com/howto/img_avatar.png' };
      setBooks([...books, newBook]);
    }
    navigation.navigate('BookList');
  };

  const conditionData = [
    { key: '1', label: 'Novo' },
    { key: '2', label: 'Usado' }
  ];

  const transactionTypeData = [
    { key: '1', label: 'Troca' },
    { key: '2', label: 'Venda' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{isEdit ? 'EDITAR LIVRO' : 'CADASTRO LIVRO'}</Text>
      <Text style={styles.label}>FOTO DO LIVRO</Text>
      <Image
        source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
        style={styles.avatar}
      />
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="NOME"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.nome}
          />
        )}
      />
      {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}
      
      <Controller
        control={control}
        name="genero"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="GENERO"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.genero}
          />
        )}
      />
      {errors.genero && <Text style={styles.errorText}>{errors.genero.message}</Text>}
      
      <Text style={styles.pickerLabel}>CONDIÇÃO DE USO</Text>
      <Controller
        control={control}
        name="condicao"
        render={({ field: { onChange, value } }) => (
          <ModalSelector
            data={conditionData}
            initValue="Novo"
            onChange={(option) => onChange(option.label)}
            style={styles.selector}
          >
            <TextInput
              label={value}
              editable={false}
              mode="outlined"
              style={styles.input}
              value={value}
              error={!!errors.condicao}
            />
          </ModalSelector>
        )}
      />
      
      <Text style={styles.pickerLabel}>É TROCA, OU VENDA?</Text>
      <Controller
        control={control}
        name="transacao"
        render={({ field: { onChange, value } }) => (
          <ModalSelector
            data={transactionTypeData}
            initValue="Troca"
            onChange={(option) => onChange(option.label)}
            style={styles.selector}
          >
            <TextInput
              label={value}
              editable={false}
              mode="outlined"
              style={styles.input}
              value={value}
              error={!!errors.transacao}
            />
          </ModalSelector>
        )}
      />
      
      <Controller
        control={control}
        name="formaPagamento"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="FORMA DE PAGT (P TROCA)"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.formaPagamento}
          />
        )}
      />
      {errors.formaPagamento && <Text style={styles.errorText}>{errors.formaPagamento.message}</Text>}
      
      <Controller
        control={control}
        name="descricao"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="DESCRIÇÃO"
            mode="outlined"
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={!!errors.descricao}
          />
        )}
      />
      {errors.descricao && <Text style={styles.errorText}>{errors.descricao.message}</Text>}
      
      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        {isEdit ? 'ATUALIZAR' : 'REGISTRAR'}
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    marginBottom: 10,
  },
  selector: {
    width: '90%',
    marginBottom: 10,
  },
  button: {
    width: '90%',
    padding: 10,
    marginTop: 20,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  pickerLabel: {
    alignSelf: 'flex-start',
    marginLeft: '5%',
  }
});

export default BookRegisterScreen;

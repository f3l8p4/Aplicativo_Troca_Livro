// services/ApiLivros/ApiLivros.js
import axios from "axios";

const apiUrl = process.env.API_URL || 'https://sua-api-url.com/'; // Altere para sua URL real

const getLivros = async () => {
  try {
    const response = await axios.get(`${apiUrl}livros`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter livros:', error);
  }
};

const getLivro = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}livros/${id}`);
    return response.data;
  } catch (error) {
    console.log('Erro ao obter o registro de livro', error);
  }
};

const addLivro = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}livros/`, data);
    console.log('Livro adicionado com sucesso');
  } catch (error) {
    console.error('Erro ao adicionar livro:', error);
  }
};

const excludeLivro = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}livros/${id}`);
    console.log('Livro excluído com sucesso:', response.data);
  } catch (erro) {
    console.error('Erro ao excluir o livro', erro);
  }
};

const updateLivro = async (id, dadosAtualizados) => {
  try {
    const response = await axios.put(`${apiUrl}livros/${id}`, dadosAtualizados);
    console.log('Livro atualizado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
  }
};

const apiLivros = {
  getLivros,
  getLivro,
  addLivro,
  updateLivro,
  excludeLivro
};

export default apiLivros;

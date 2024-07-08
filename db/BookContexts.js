import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      nome: "Livro 1",
      genero: "Ficção",
      condicao: "Novo",
      transacao: "Troca",
      foto: "https://via.placeholder.com/150",
      descricao: "Descrição do Livro 1"
    },
    {
      id: 2,
      nome: "Livro 2",
      genero: "Aventura",
      condicao: "Usado",
      transacao: "Venda",
      foto: "https://via.placeholder.com/150",
      descricao: "Descrição do Livro 2"
    },
    {
      id: 3,
      nome: "Livro 3",
      genero: "Romance",
      condicao: "Novo",
      transacao: "Troca",
      foto: "https://via.placeholder.com/150",
      descricao: "Descrição do Livro 3"
    },
    {
      id: 4,
      nome: "Livro 4",
      genero: "Terror",
      condicao: "Usado",
      transacao: "Venda",
      foto: "https://via.placeholder.com/150",
      descricao: "Descrição do Livro 4"
    }
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
};
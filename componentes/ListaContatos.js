// Arquivo: ListaContatos.js
import React from 'react';
import CartaoUsuario from './CartaoUsuario'; // Importa o componente do cartão
import contatos from './dadosContatos'; // Importa os dados

const estiloLista = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '20px'
};

const ListaContatos = () => {
  return (
    <div style={estiloLista}>
      {contatos.map((contato) => (
        <CartaoUsuario 
          key={contato.id} // Chave única é crucial para listas no React
          contato={contato} 
        />
      ))}
    </div>
  );
};

export default ListaContatos;
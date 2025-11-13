import React from 'react';
import CartaoUsuario from './CartaoUsuario';
import contatos from './dadosContatos';

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
          key={contato.id} 
          contato={contato} 
        />
      ))}
    </div>
  );
};

export default ListaContatos;
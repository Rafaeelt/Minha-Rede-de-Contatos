
import React from 'react';
import ListaContatos from './ListaContatos'; 

const Titulo = ({ texto }) => <h1>{texto}</h1>;
const Saudacao = ({ nome }) => <h2>Olá, {nome}! Sua rede tem a seguir:</h2>;

const App = () => {
  return (
    <div className="minha-rede-de-contatos">

      <Titulo texto="Minha Rede de Contatos 🤝" />
      
      <Saudacao nome="Usuário" />
      
            <ListaContatos />
    </div>
  );
};

export default App;
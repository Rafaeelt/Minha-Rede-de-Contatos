// Arquivo: App.js
import React from 'react';
import ListaContatos from './ListaContatos'; 

// Simulação dos seus componentes Titulo.js e Saudacao.js
const Titulo = ({ texto }) => <h1>{texto}</h1>;
const Saudacao = ({ nome }) => <h2>Olá, {nome}! Sua rede tem a seguir:</h2>;

const App = () => {
  return (
    <div className="minha-rede-de-contatos">
      {/* Equivalente ao seu Titulo.js */}
      <Titulo texto="Minha Rede de Contatos 🤝" />
      
      {/* Equivalente ao seu Saudacao.js */}
      <Saudacao nome="Usuário" />
      
      {/* Componente que exibe a lista de perfis */}
      <ListaContatos />
    </div>
  );
};

export default App;
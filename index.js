// Arquivo: index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa o cliente de renderização
import App from './App'; // Importa o componente principal

// Cria o container raiz do React (assumindo que há um <div id="root"> no seu index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza a aplicação
root.render(
  // Usa o React.StrictMode para checagens adicionais durante o desenvolvimento
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
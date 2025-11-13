import React from 'react';

const estiloCartao = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '15px',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
  maxWidth: '300px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9'
};

const estiloFoto = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: '10px'
};

const estiloStatus = (status) => ({
  display: 'inline-block',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 
    status === 'online' ? 'green' : 
    status === 'ausente' ? 'orange' : 'gray',
  marginLeft: '5px'
});

const CartaoUsuario = ({ contato }) => {
  return (
    <div style={estiloCartao}>
      <img 
        src={contato.fotoUrl} 
        alt={`Foto de perfil de ${contato.nome}`} 
        style={estiloFoto} 
      />
      <h2>{contato.nome}</h2>
      <p>
        **{contato.titulo}** <span 
          title={`Status: ${contato.status}`} 
          style={estiloStatus(contato.status)}
        ></span>
      </p>
      <hr />
      <p>📧 {contato.email}</p>
      <p>📞 {contato.telefone}</p>
    </div>
  );
};

export default CartaoUsuario;
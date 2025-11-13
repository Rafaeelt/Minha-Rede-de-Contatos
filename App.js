
import React from 'react';
import { ScrollView } from 'react-native';
import Titulo from './componentes/Titulo';
import Saudacao from './componentes/Saudacao';
import FotoPerfil from './componentes/Fotoperfil';


const App = () => {
return <ScrollView>
  <Titulo />
  <Saudacao nome='Rafael' />
  <FotoPerfil />
</ScrollView>
};

export default App;
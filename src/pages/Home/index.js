import React, { useState } from 'react';
import axios from 'axios';
import * as Style from './styled';
import { useHistory } from'react-router-dom';

function App() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [repositorios, setRepositorios] = useState([]);


  async function loadData(){
    const [user, repositorio] = await Promise.all([
      axios.get(`https://api.github.com/users/${usuario}`),
      axios.get(`https://api.github.com/users/${usuario}/repos`)
    ])

    setUsuario(user.data);
    setRepositorios(repositorio.data);
    history.push('/repositories');
    // const [ erro, setErro ] = useState(false);
  }

  // Movi para fora da função e to pegano os dados que eu salvei no estado
  // ao inves de pegar os dados diretos da api

  localStorage.setItem('repositorio', JSON.stringify(repositorios));
  localStorage.setItem('usuario', JSON.stringify(usuario));
 

  // function handlePesquisa(){
  //   axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
  //     const repositories = response.data;
     
  //     const repositoryData = [];

  //     repositories.map((repository) =>{
  //       const repositoryName = repository.name;

  //       repositoryData.push(repositoryName);
        
  //     });

  //     localStorage.setItem('repository', JSON.stringify(repositoryData));
  //     setErro(false);
  //     history.push('/repositories');
  //   })
  //   .catch(err => {
  //     setErro(true);
  //   });
  // }


  return (
    <Style.HomeContainer>
      <Style.Img src="img/github.png" />
      <Style.Content>
        <Style.Input className="usuarioInput" placeholder="Usuário Github" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <Style.Button type="button" onClick={loadData}>Pesquisar</Style.Button>
      </Style.Content>
      {/* { erro ? <Style.ErrorMsg>Ocorreu um erro. Tente Novamente.</Style.ErrorMsg> : '' } */}
    </Style.HomeContainer>
  );
}

export default App;
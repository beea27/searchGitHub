import React, { useEffect, useState } from 'react';
import * as Style from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories(){
  const history = useHistory();
  const [repositories, setRepositories] = useState([]);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    let Data = localStorage.getItem('repositorio');
    let User = localStorage.getItem('usuario');

    const repository = JSON.parse(Data);
    const user = JSON.parse(User);


    if(Data === null || User === null) {
      history.push("/")
    }
    setRepositories(repository);
    setUsuario(user);
 
  },[history]);
  
  return(
    <>
      <Style.Container>
        <Style.UserGit>
          <Style.PhotoUser>
            <Style.Photo src={usuario.avatar_url} alt={usuario.login}/>
            <Style.User>{usuario.login}</Style.User>
          </Style.PhotoUser>
          <Style.IconGit src="img/icon-github.png"/>
        </Style.UserGit>
        <Style.List>
          { repositories.map(repository => {
            return(
              <Style.ListItem key={repository.id} href="https://github.com/{usuario.login}/airbnb">
                <Style.IconGit src="img/icon-github.png"/>{ repository.name }
                </Style.ListItem>
            )
          })}
        </Style.List>
        <Style.LinkHome to="/">Voltar</Style.LinkHome>
      </Style.Container>
    </>
  );
}
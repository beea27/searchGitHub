import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`
export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
export const ListItem = styled(Link)`
  margin: .5rem 0;
  color: violet;
  padding: .5rem;
  border: solid 2px purple;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover{
    background-color: purple;
    border-color: violet;
  }
`

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  padding: .5rem;
  text-decoration: none;
  color: violet;
  border: solid 2px purple;
  border-radius: .25rem;
  background-color: purple;
`
export const IconGit = styled.img`
  margin-right: 10px;
`

export const Photo = styled.img`
  border-radius:50%; 
  max-width: 70px;
  margin: 10px;
`

export const User = styled.h2`
  color: violet;
`

export const UserGit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: .25rem;
  background-color: purple;
  border: solid 3px violet;
  padding: 10px;
`

export const PhotoUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
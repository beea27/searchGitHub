import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Content =styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  border: 2px solid purple;
  border-radius: .25rem;
  height: 2rem;
  padding: 0 .5rem;
  margin: 20px;
  background-color: transparent;
  color: violet;
  font-size: large;
  font-weight: bold;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 2rem;
  background-color: purple;
  border: solid 2px purple;
  border-radius: .25rem;
  color: violet;
  font-size: large;
  font-weight: bold;

  &:focus,
  &:active{
    outline: none;
    box-shadow: none;
  }
`
export const ErrorMsg = styled.span`
  display: block;
  font-size: medium;
  color: purple;
  font-weight: bold;
  margin-top: 1rem;
`

export const Img = styled.img`
  width: 20%;
`
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';

export const Container = styled.div`
  background-color: rgb(0, 153, 255);
  display: flex;
  align-items: center;
  padding: 5px;
`;


export const Logo = styled(FaBeer)`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: black;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const MenuItens = styled.div`
  button {
    padding: 8px;
    margin: 5px 8px;
    border: none;
    background: none;
    cursor: pointer;
    color: white;
    
    &:hover{
      color: white;
      font-weight: bold;
    }
  }
  
`;
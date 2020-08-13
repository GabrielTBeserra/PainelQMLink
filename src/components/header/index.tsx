import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, MenuItens } from './styles';


const header: React.FC = () => {
  return (
    <Container>
      <Link to={"/"}>
        <Logo />
      </Link>
      <MenuItens>
        <Link to={"servers"}>
          <button>Servidores</button>
        </Link>

        <Link to={"acoes"}>
          <button>Acoes</button>
        </Link>

        <Link to={"players"}>
          <button>Jogadores</button>
        </Link>
      </MenuItens>
    </Container>

  );
}

export default header;
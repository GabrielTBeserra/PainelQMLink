import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  margin-top: 2px;
  display: flex;  
  align-items: center;
  justify-content: center;
`;

export const Tables = styled.div`
  width: 100%;
  padding: 5px;
`;


interface Colos {
  color?: string;
  hoverColor?: string;
}

export const ButonsAction = styled.div<Colos>`

    button {
      border-radius: 2px;
      padding: 3px 10px 2px 10px;
      background-color: ${(props) => props.color};
      color: white;
      font-weight: bold;
      border: none;
      margin: 1px;
      cursor: pointer;
  
      &:hover {
        border-radius: 5px;
        transition-duration: 0.2s;
        background-color: ${(props) => props.hoverColor};
      }

      
      @media screen and (max-width: 768px) {
        width: 100%;

        .teste {
          display: none
        }
      }
    }
  `;

export const Cell = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Cell2 = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


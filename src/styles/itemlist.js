import styled from 'styled-components';

export const ItemlistComponent = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-rows: repeat(3, 1fr);
`;
export const ItemComponent = styled.li`
  img {
    width: 100px;
    height: 100px;
  }
`;

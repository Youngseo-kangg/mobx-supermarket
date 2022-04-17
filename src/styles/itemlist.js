import styled from 'styled-components';

export const ItemlistComponent = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
  grid-auto-rows: repeat(3, 1fr);
`;
export const ItemComponent = styled.li`
  background-color: #eee;
  display: flex;
  .itemImageWrapper {
    display: grid;
    place-items: center;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .itemStatusWrapper {
    width: 100%;
    display: grid;
    grid-auto-rows: repeat(3, 1fr);
    h2 {
      font-size: 1.2rem;
    }
    .itemCountWrapper {
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 5px;
    }
  }
`;

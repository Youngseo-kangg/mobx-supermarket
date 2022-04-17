import styled from 'styled-components';

export const NavComponent = styled.nav`
  display: grid;
  place-items: center;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
  }
  li {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    place-content: center;
    transition: all 0.3s;
    > a {
      text-decoration: none;
    }
    &.active {
      border-bottom: 2px solid #000;
      border-radius: 2px;
    }
  }
`;

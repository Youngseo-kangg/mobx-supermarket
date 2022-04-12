import styled from 'styled-components';

export const FooterComponent = styled.footer`
  text-align: center;
  font-size: 0.9rem;
  display: flex;
  place-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
  }
  a:before {
    content: ' ';
  }
  a:after {
    content: ', ';
  }
`;

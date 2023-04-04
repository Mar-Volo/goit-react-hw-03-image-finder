import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: 100vw;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin: 0px auto;
  padding: 0px;
`;

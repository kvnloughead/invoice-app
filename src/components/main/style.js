import styled from 'styled-components';

import nothingHere from '../../images/nothing-here.png';
import nothingHereDark from '../../images/nothing-here-dark.png';

export const NothingHere = styled.img.attrs(({ theme }) => ({
  src: theme.isLight ? nothingHere : nothingHereDark,
}))`
  padding-top: 141px;
  margin: auto;
`;

export const SummaryContainer = styled.div`
  width: 730px;
  padding-top: 65px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 550px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

`;

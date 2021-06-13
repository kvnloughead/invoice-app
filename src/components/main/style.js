import styled from 'styled-components';

import nothingHere from '../../images/nothing-here.png';
import nothingHereDark from '../../images/nothing-here-dark.png';

export const NothingHere = styled.img.attrs(({ theme }) => ({
  src: theme.isLight ? nothingHere : nothingHereDark,
}))`
  padding-top: 141px;
`;

export const SummaryContainer = styled.div`
  width: 730px;
  padding-top: 65px;
  margin-left: 103px;
`;

import styled from 'styled-components';

import { secondaryTextStyles, flexCenter } from '../../../utils/utility-styles';

export const Fieldset = styled.fieldset`
  padding: 0;
  border: none;
  margin: 48px 0 110px;
  ${flexCenter('column')};
`;

export const Legend = styled.legend`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: #777F98;
  margin: 0 0 16px;
`;

export const Table = styled.table`
  max-width: 504px;
`;

export const Row = styled.tr`
  display: grid;
  grid-template-columns: 214px 46px 100px 56px 1fr;
  grid-gap: 16px;
  margin-bottom: 18px;

  &:first-of-type {
    margin-bottom: 16px;
  }
`;

export const TH = styled.th`
  grid-column: ${({ col }) => col};
  color: ${({ theme }) => theme.colorInputLabel};
  ${secondaryTextStyles}
  text-align: left;
`;

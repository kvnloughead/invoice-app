import styled from 'styled-components';

import { invoiceMobileStyles } from '../../../utils/constants';

export const AddressContainer = styled.address`
  display: flex;
  flex-direction: column;
  text-align: ${({ ta }) => ta};
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};

  @media screen and (max-width: 768px) {
    grid-column: ${({ col, name }) => (invoiceMobileStyles[name] ? invoiceMobileStyles[name].col : col)};
    text-align: ${({ ta, name }) => (invoiceMobileStyles[name] ? invoiceMobileStyles[name].ta : ta)};
  }
`;

export const AddressItem = styled.p`
  margin: 0;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.23px;
  color: ${({ theme }) => theme.colorSecondary};
`;

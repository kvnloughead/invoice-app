import styled, { css } from 'styled-components';

import { lineItemMobileStyles } from '../../../utils/constants';

const headerFontStyles = css`
  font-weight: 500; 
  font-size: 11px;
  line-height: 18px; 
  letter-spacing: -0.23px; 
`;

export const Table = styled.table`
  margin-top: 45px;
  grid-row: 5;
  background: ${({ theme }) => theme.bgInvoiceItems};
  border-radius: 10px;
  padding-top: 32px;

  @media screen and (max-width: 800px) {
    grid-column: 1 / 4;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / 3;
    padding-top: 24px;
  }

  @media screen and (max-width: 375px) {
    width: calc(100% + 48px);
    margin-left: -24px;
  }
`;

export const TableHeader = styled.thead`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 286px 29px 118px 126px;
  padding: 0 32px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 29px 118px 126px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 24px;
    margin-bottom: 24px;
    grid-row-gap: 8px;
    grid-template-columns: 1fr minmax(80px, 148px) minmax(60px, 124px) ;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "a a b"
                         "c d b";
  }
`;

export const TH = styled.th`
  ${headerFontStyles}
  padding-bottom: 32px;
  color: ${({ theme }) => theme.colorSecondary};
  text-align: ${({ col }) => ['left', 'center', 'right', 'right'][col]};
  
  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const TD = styled.td`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  padding-bottom: 32px;
  text-align: ${({ col }) => ['left', 'center', 'right', 'right'][col]};

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    grid-area: ${({ name }) => lineItemMobileStyles.gridAreas[name]};
    text-align: ${({ name }) => lineItemMobileStyles.textAlign[name]};
    color: ${({ name }) => lineItemMobileStyles.color[name]};
    align-self: ${({ name }) => lineItemMobileStyles.alignSelf[name]};

    &:after {
      content: "${({ name }) => name === 'quantity' && '\xa0\xa0x\xa0'}";
    }
  }
`;

export const TableFooterRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.bgInvoiceItemsFooter};
  border-radius: 0 0 10px 10px;
  height: 80px;
  padding: 0 32px;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
    padding: 0 24px;
  }
`;

export const TF = styled.td`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #ffffff;
  &:first-of-type {
    ${headerFontStyles}
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

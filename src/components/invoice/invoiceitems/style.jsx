import styled, { css } from 'styled-components';

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

  @media screen and (max-width: 800px) {
    grid-column: 1 / 4;
  }

  @media screen and (max-width: 768px) {
    grid-column: 1 / 2;
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
    grid-template-columns: 148px 148px;
  }
`;

export const TH = styled.th`
  ${headerFontStyles}
  padding-bottom: 32px;
  color: ${({ theme }) => theme.colorSecondary};
  text-align: ${({ row }) => ['left', 'center', 'right', 'right'][row]};
  
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
  text-align: ${({ row }) => ['left', 'center', 'right', 'right'][row]};
`;

export const TableFooterRow = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.bgInvoiceItemsFooter};
  border-radius: 0 0 10px 10px;
  height: 80px;
  padding: 0 32px;
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
`;

import styled from 'styled-components';

import { secondaryTextStyles, primaryTextStyles } from '../../utils/utility-styles';
import { invoiceMobileStyles } from '../../utils/constants';

export const InvoiceContainer = styled.div`
  width: 730px;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 24px;
  background: ${({ theme }) => theme.bgInvoice};
  display: grid;
  grid-template-rows: 75px 196px 1fr;
  grid-template-columns: 196px 203px 1fr;
  padding: 48px;
  ${primaryTextStyles}
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 180px 180px;
    grid-template-rows: 75px 1fr;
    justify-content: center;
    padding: 48px 0;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: 120px 1fr;
    padding: 24px;
  }

  @media screen and (max-width: 450px) {
    padding-bottom: 0;
  }
`;

export const TopLeft = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-direction: column;
`;

export const Id = styled.h2`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.8px;
  font-weight: 700;
  color: ${({ theme }) => theme.colorPrimary};
  margin: 0 0 8px;

  &:before {
    content: "#";
    font-weight: 700;
    color: #888EB0;
  }
`;

export const Description = styled.p`
  ${secondaryTextStyles}
  margin: 0;
`;

export const Middle = styled.dl`
  grid-row: 2;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 196px 203px 1fr;
  grid-template-rows: 27px 28px 24px 27px 1fr; 
  margin: 0;
  padding-top: 21px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 180px 180px;
    grid-template-rows: 27px 28px 24px 27px 1fr 1fr 1fr;
  }

  @media screen and (max-width: 408px) {
    grid-template-columns: 120px 1fr;
  }
`;

export const Label = styled.dt`
  ${secondaryTextStyles}
  margin-bottom: 12px;
  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};

  @media screen and (max-width: 768px) {
    margin-top: ${({ name }) => (name === 'sentTo' ? '32px' : 0)};
    grid-row: ${({ row, name }) => (invoiceMobileStyles[name] ? invoiceMobileStyles[name].label.row : row)};
    grid-column: ${({ col, name }) => (invoiceMobileStyles[name] ? invoiceMobileStyles[name].label.col : col)};
  }
`;

export const Item = styled.dd`
  ${primaryTextStyles}
  margin: 0;
  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};

  @media screen and (max-width: 768px) {
    grid-row: ${({ row, name }) => (invoiceMobileStyles[name] ? invoiceMobileStyles[name].item.row : row)};
    grid-column: ${({ col, name }) => (invoiceMobileStyles[name] ? invoiceMobileStyles[name].item.col : col)};
  }
`;

export const InvoiceDate = styled.div`
  display: flex;
  flex-direction: column;
  ${primaryTextStyles}
  margin-bottom: 32px;
`;

export const PaymentDue = styled.div`
  display: flex;
  flex-direction: column;
  ${primaryTextStyles}
  margin-bottom: 32px;
`;

export const Name = styled.p`
  
`;

export const SentTo = styled.p``;
export const LineItems = styled.p``;
export const AmountDue = styled.p``;

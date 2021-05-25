import styled, { css } from 'styled-components';

const textPrimary = css`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.3125px;
  font-style: normal;
  color: ${({ theme }) => theme.colorPrimary};
`;

const textSecondary = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  font-style: normal;
  color: ${({ theme }) => theme.colorSecondary};
`;

export const InvoiceContainer = styled.div`
  height: 631px;
  width: 730px;
  box-sizing: border-box;
  margin-top: 24px;
  background: ${({ theme }) => theme.bgInvoice};
  display: grid;
  grid-template-rows: 75px 196px 1fr;
  grid-template-columns: 196px 203px 1fr;
  padding: 48px;
  ${textPrimary}
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
  ${textSecondary}
  margin: 0;
`;

export const Middle = styled.dl`
  grid-row: 2;
  display: grid;
  grid-template-columns: 196px 203px 1fr;
  grid-template-rows: 27px 28px 24px 27px 1fr; 
  margin: 0;
  padding-top: 21px;
`;

export const Label = styled.dt`
  ${textSecondary}
  margin-bottom: 12px;
  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};
`;

export const Item = styled.dd`
  ${textPrimary}
  margin: 0;
  grid-row: ${({ row }) => row};
  grid-column: ${({ col }) => col};
`;

export const InvoiceDate = styled.div`
  display: flex;
  flex-direction: column;
  ${textPrimary}
  margin-bottom: 32px;
`;

export const PaymentDue = styled.div`
  display: flex;
  flex-direction: column;
  ${textPrimary}
  margin-bottom: 32px;
`;

export const Name = styled.p`
  
`;

export const SentTo = styled.p``;
export const LineItems = styled.p``;
export const AmountDue = styled.p``;

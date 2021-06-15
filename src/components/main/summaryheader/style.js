import styled from 'styled-components';

import { flexRowStyles } from '../../../utils/utility-styles';
import { summaryHeaderString } from '../../../utils/constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 730px;
  padding-top: 72px;
  margin: auto;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -1px;
  margin: 0 0 8px;
`;

export const Row = styled.div`
  ${flexRowStyles({ ai: 'center' })}
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colorSecondary};
  margin: 0;

  &:before {
    content: "${({ numInvoices }) => summaryHeaderString(numInvoices)}"
  }

  @media screen and (max-width: 550px) {
    &:before {
      content: "${({ numInvoices }) => summaryHeaderString(numInvoices, true)}"
    }
  }
`;

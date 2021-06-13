import styled from 'styled-components';

import { flexRowStyles } from '../../../utils/utility-styles';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 730px;
  padding-top: 72px;
  margin-left: 103px;

  @media screen and (max-width: 1000px) {
    margin-left: 103px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -1px;
  margin: 0 0 8px;
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.colorSecondary};
  margin: 0;
`;

export const Row = styled.div`
  ${flexRowStyles({ ai: 'center' })}
`;

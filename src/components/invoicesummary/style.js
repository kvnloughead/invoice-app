import styled, { css } from 'styled-components';

import rightArrowIcon from '../../images/icon-arrow-right.svg';

const fontStyles = css`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
`;

export const SummaryContainer = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: 135px 151px 1fr 1fr 144px 48px;
  box-shadow: 0px 10px 10px -10px #48549F1A;
  background: ${({ theme }) => theme.bgInvoice};
  margin: 0; 
  padding: 0;
  list-style: none;
  height: 72px;
  margin-bottom: 16px;
  box-shadow: 0px 10px 10px -10px #48549F1A;
  border-radius: 8px;
  ${fontStyles}
`;

export const NumberSign = styled.span`
  font-weight: 700;
  color: #888EB0;
`;

export const Id = styled.li`
  font-weight: 700;
  color: ${({ theme }) => theme.colorPrimary};
  padding-left: 32px;
`;

export const Date = styled.li`
  color: ${({ theme }) => theme.colorDate};
`;

export const Name = styled.li`
  color: ${({ theme }) => theme.colorName};
`;

export const Cost = styled.li`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #0C0E16;
  text-align: right;
  color: ${({ theme }) => theme.colorPrimary};
`;

const paidStatusColors = {
  Paid: { color: 'rgba(51, 214, 159, 1)', background: 'rgba(51, 214, 159, .0571)' },
  Pending: { color: 'rgba(255, 143, 0, 1)', background: 'rgba(255, 143, 0, .0571)' },
  Draft: { color: 'rgba(55, 59, 83, 1)', background: 'rgba(55, 59, 83, .0571)' },
};

export const Dot = styled.span`
  font-size: 32px;
  vertical-align: sub;
`;

export const PaidStatus = styled.li`
  text-align: center;
  font-weight: 700;
  width: 104px;
  height: 40px;
  color: ${(props) => props.status && paidStatusColors[props.status].color};
  background: ${(props) => props.status && paidStatusColors[props.status].background};
  border-radius: 3px;
  justify-self: end;
`;

export const RightArrow = styled.i`
  background-image: url('${rightArrowIcon}');
  width: 32px;
  height: 32px;
  background-position: center;
  background-repeat: no-repeat;
  justify-self: center;
`;

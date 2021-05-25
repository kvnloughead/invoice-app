import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 45px;
  grid-row: 5;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 286px 29px 118px 126px;
  padding: 0 32px;
`;

export const TH = styled.th`
  font-weight: 500; 
  font-size: 11px;
  line-height: 18px; 
  letter-spacing: -0.23px; 
  padding-bottom: 32px;
  color: ${({ theme }) => theme.colorSecondary};
  text-align: ${({ row }) => ['left', 'center', 'right', 'right'][row]};
`;

export const TD = styled.td`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  padding-bottom: 32px;
  text-align: ${({ row }) => ['left', 'center', 'right', 'right'][row]};
`;

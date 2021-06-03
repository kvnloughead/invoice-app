import styled from 'styled-components';

export const AddressContainer = styled.address`
  display: flex;
  flex-direction: column;
  grid-column: 3;
  text-align: ${({ ta }) => ta};
  grid-column: ${({ col }) => col};
  grid-row: ${({ row }) => row};
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

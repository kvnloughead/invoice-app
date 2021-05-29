import styled from 'styled-components';

import { bgStandard, secondaryTextStyles, flexCenter } from '../../utils/utility-styles';
import deleteIcon from '../../images/icon-delete.svg';

export const Fieldset = styled.fieldset`
  padding: 0;
  border: none;
  margin: 48px 0 0;
  ${flexCenter('column')};
`;

export const Legend = styled.legend`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.375px;
  color: #777F98;
  margin: 0 0 16px;
`;

export const Table = styled.table`
  max-width: 504px;
`;

export const Row = styled.tr`
  display: grid;
  grid-template-columns: 214px 46px 100px 56px 1fr;
  grid-gap: 16px;
  margin-bottom: 18px;

  &:first-of-type {
    margin-bottom: 16px;
  }
`;

export const TH = styled.th`
  grid-column: ${({ col }) => col};
  ${secondaryTextStyles}
  color: #7E88C3;
  text-align: left;
`;

export const TD = styled.td`
  grid-column: ${({ col }) => col};
  
  &:last-of-type Input {
    border: none;
    padding-left: 0;
    color: #888EB0;
    font-weight: 700;
  }
`;

export const Input = styled.input`
  border: solid 1px #DFE3FA;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 48px;
  padding-left: 20px;
  ${secondaryTextStyles}
  color: #0C0E16;
  font-weight: 700;
`;

export const DeleteIcon = styled.button`
  ${bgStandard(deleteIcon)}
  grid-column: ${({ col }) => col};
  grid-column: ${({ col }) => col};
  width: 12.5px;
  height: 16px;
  align-self: center;
  margin-left: 16px;
`;

import styled from 'styled-components';

import logo from '../../images/logo.svg';

import { bgStandard, flexCenter } from '../../utils/utility-styles';

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 103px;
  background: ${({ theme }) => theme.bgSidebar};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  ${flexCenter('column')}
  justify-content: space-between;
  z-index: 3;
`;

export const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background: #7C5DFA;
  height: 103px;
  width: 103px;

  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    background: #9277FF;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  &:after {
    content: '';
    width: 40px;
    height: 40px;
    display: inline-block;
    z-index: 2;
    ${bgStandard(logo)}
  }
`;

export const FlexColumn = styled.div`
  ${flexCenter('column')}
  width: 100%;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 31px 0;
`;

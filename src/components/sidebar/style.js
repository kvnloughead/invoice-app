import styled, { css } from 'styled-components';

import logo from '../../images/logo.svg';
import moon from '../../images/icon-moon.svg';
import sun from '../../images/icon-sun.svg';

import { bgStandard, flexCenter } from '../../utils/utility-styles';

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 103px;
  background: #373B53;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  ${flexCenter('column')}
  justify-content: space-between;
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

export const FlexRow = styled.div`
  ${flexCenter('column')}
  width: 100%;
`;

export const ModeIconStyles = css`
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
  justify-self: flex-end;
  ${bgStandard(((props) => (props.isDark ? sun : moon)))}
  background-size: 20px 20px;
  padding: 42px 51.5px;
  border-bottom: solid 1px #494E6E;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 31px 0;
`;

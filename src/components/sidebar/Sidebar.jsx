// eslint-disable-next-line no-use-before-define
import React from 'react';
// import styled from 'styled-components';

import avatar from '../../images/image-avatar.jpg';
// import AppContext from '../../contexts/AppContext';
import {
  SidebarContainer, Logo, Avatar, FlexRow,
} from './style';

// const ModeIcon = styled.button`${ModeIconStyles}`;

const Sidebar = () => (
  <SidebarContainer>
    <Logo />
    <FlexRow>
      {/* <ModeIcon isDark={isDark.value} /> */}
      <Avatar src={avatar} alt="Current user's avatar" />
    </FlexRow>
  </SidebarContainer>
);
export default Sidebar;

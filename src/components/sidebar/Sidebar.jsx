import React from 'react';

import Toggler from '../toggler/Toggler';
import avatar from '../../images/image-avatar.jpg';
import { themePropType } from '../themes/Themes';
import {
  SidebarContainer, Logo, Avatar, FlexColumn,
} from './style';

const Sidebar = ({ theme, themeToggler }) => (
  <SidebarContainer>
    <Logo />
    <FlexColumn>
      <Toggler theme={theme} toggleTheme={themeToggler} />
      <Avatar src={avatar} alt="Current user's avatar" />
    </FlexColumn>
  </SidebarContainer>
);

Sidebar.propTypes = themePropType;

export default Sidebar;

import React from 'react';

import Toggler from '../toggler/Toggler';
import avatar from '../../images/image-avatar.jpg';
// import { themePropType } from '../themes/Themes';
import {
  SidebarContainer, Logo, Avatar, Div,
} from './style';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ theme, themeToggler }) => (
  <SidebarContainer>
    <Logo />
    <Div>
      <Toggler theme={theme} toggleTheme={themeToggler} />
      <Avatar src={avatar} alt="Current user's avatar" />
    </Div>
  </SidebarContainer>
);

// Sidebar.propTypes = themePropType;

export default Sidebar;

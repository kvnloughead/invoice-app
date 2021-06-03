import React from 'react';
import PropTypes from 'prop-types';

import avatar from '../../images/image-avatar.jpg';
import {
  SidebarContainer, Logo, Avatar, FlexRow,
} from './style';

const Sidebar = ({ children }) => (
  <SidebarContainer>
    <Logo />
    <FlexRow>
      {children}
      <Avatar src={avatar} alt="Current user's avatar" />
    </FlexRow>
  </SidebarContainer>
);

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Sidebar;

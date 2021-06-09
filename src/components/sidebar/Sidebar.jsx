import React from 'react';
import PropTypes from 'prop-types';

import avatar from '../../images/image-avatar.jpg';
import {
  SidebarContainer, Logo, Avatar, FlexColumn,
} from './style';

const Sidebar = ({ children }) => (
  <SidebarContainer>
    <Logo />
    <FlexColumn>
      {children}
      <Avatar src={avatar} alt="Current user's avatar" />
    </FlexColumn>
  </SidebarContainer>
);

Sidebar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Sidebar;

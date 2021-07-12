import React from 'react';
import styled from 'styled-components';

import AppContext from '../../../contexts/AppContext';

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .5);
  visibility: ${({ isOverlayOpen }) => (isOverlayOpen ? 'visible' : 'hidden')};
  z-index: 1;
`;

const Overlay = () => {
  const { isOverlayOpen, closeAllPopups } = React.useContext(AppContext);
  return (
    <Div isOverlayOpen={isOverlayOpen} onClick={closeAllPopups} />
  );
};

export default Overlay;

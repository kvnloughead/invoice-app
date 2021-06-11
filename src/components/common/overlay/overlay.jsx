import React from 'react';
import styled from 'styled-components';

import AppContext from '../../../contexts/AppContext';

const Div = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .5);
  visibility: ${({ isOverlayOpen }) => (isOverlayOpen ? 'visible' : 'hidden')};
  z-index: 1;
`;

const Overlay = () => {
  const { isOverlayOpen } = React.useContext(AppContext);
  return (
    <Div isOverlayOpen={isOverlayOpen} onClick={} />
  );
};

export default Overlay;

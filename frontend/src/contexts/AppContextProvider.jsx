import React from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import rawInvoices from '../utils/data.json';

const AppContextProvider = ({ children }) => {
  const [invoices, setInvoices] = React.useState(rawInvoices);
  const [currentInvoice, setCurrentInvoice] = React.useState(null);
  const [currentForm, setCurrentForm] = React.useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);
  const [windowInnerWidth, setWindowInnerWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWindowInnerWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  const closeAllPopups = (evt) => {
    if (evt.type === 'click' || evt.key === 'Escape') {
      setCurrentForm(null);
      setIsOverlayOpen(false);
    }
  };

  const state = {
    invoices,
    setInvoices,
    currentInvoice,
    setCurrentInvoice,
    currentForm,
    setCurrentForm,
    isOverlayOpen,
    setIsOverlayOpen,
    closeAllPopups,
    windowInnerWidth,
    setWindowInnerWidth,
  };
  return (
    <AppContext.Provider value={state}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppContextProvider;

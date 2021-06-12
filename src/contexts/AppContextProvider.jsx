import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import { processInvoices } from '../utils/helpers';
import rawInvoices from '../utils/data.json';

const AppContextProvider = ({ children }) => {
  const processedInvoices = useMemo(() => processInvoices(rawInvoices));
  const [invoices, setInvoices] = React.useState(processedInvoices);
  const [currentInvoice, setCurrentInvoice] = React.useState(null);
  const [currentForm, setCurrentForm] = React.useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = React.useState(false);

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

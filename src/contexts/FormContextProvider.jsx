import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AppContext from './AppContext';
import FormContext from './FormContext';

const FormContextProvider = ({ children }) => {
  const {
    currentForm, currentInvoice, setCurrentInvoice, closeAllPopups,
  } = React.useContext(AppContext);
  const [values, setValues] = useState({
    items: [{
      name: '', quantity: '', price: 0, total: 0,
    }],
  });
  if (values === null) debugger;
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newInvoice = { ...currentInvoice };
    Object.entries(values).forEach(([name, value]) => {
      const keys = name.split('.');
      if (keys.length === 3) {
        newInvoice[keys[0]][parseInt(keys[1], 10)][keys[2]] = value;
      } else if (keys.length === 2) {
        newInvoice[keys[0]][keys[1]] = value;
      } else {
        newInvoice[keys[0]] = value;
      }
      newInvoice.total = parseFloat(values.items.reduce((a, b) => a + b.total, 0));
    });
    if (currentForm === 'new') {
      newInvoice.status = 'Pending';
    }
    setCurrentInvoice(newInvoice);
    closeAllPopups(evt);
  };

  useEffect(() => {
    document.addEventListener('keydown', closeAllPopups);
    return () => {
      document.removeEventListener('keydown', closeAllPopups);
    };
  }, [currentForm]);

  useEffect(() => {
    setValues(currentForm === 'edit' && { items: currentInvoice.items });
  }, [currentForm]);

  const state = {
    values, setValues, errors, setErrors, isValid, setIsValid, handleSubmit,
  };

  return (
    <FormContext.Provider value={state}>
      {children}
    </FormContext.Provider>
  );
};

FormContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FormContextProvider;

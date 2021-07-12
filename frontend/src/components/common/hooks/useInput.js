import { useContext } from 'react';
import AppContext from '../../../contexts/AppContext';
import FormContext from '../../../contexts/FormContext';
import { accessObjectProperty } from '../../../utils/helpers';

const useInput = (data) => {
  const { currentInvoice } = useContext(AppContext);
  const {
    values, setValues, errors, setErrors, setIsValid,
  } = useContext(FormContext);
  const defaultValue = accessObjectProperty(currentInvoice, data.keys);
  const identifier = data.keys.join('.');

  const isError = errors[identifier];

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return {
    errors, isError, defaultValue, identifier, handleChange, currentInvoice, values,
  };
};

export default useInput;

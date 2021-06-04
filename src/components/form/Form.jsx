/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';

import AppContext from '../../contexts/AppContext';
import FormContext from '../../contexts/FormContext';
import {
  formConfig,
  dateInputConfig,
  descriptionInputConfig,
} from '../../utils/constants';

import Input from './input/Input';
import DateInput from './dateinput/DateInput';
import Dropdown from '../common/dropdown/Dropdown';
import ItemsList from './itemslist/ItemsList';
import Button from '../common/button/Button';

import {
  FormContainer, Title, FieldSet, Legend, Buttons,
} from './style';

const Form = () => {
  const {
    currentForm, currentInvoice, setCurrentInvoice, setCurrentForm,
  } = React.useContext(AppContext);
  const thisForm = formConfig[currentForm];

  const [values, setValues] = useState({ items: currentInvoice.items });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const state = {
    values, setValues, errors, setErrors, isValid, setIsValid,
  };

  // const resetForm = useCallback(
  //   (newValues = { email: '', password: '', username: '' },
  // newErrors = {}, newIsValid = false) => {
  //     setValues(newValues);
  //     setErrors(newErrors);
  //     setIsValid(newIsValid);
  //     setSubmitError('');
  //   },
  //   [setValues, setErrors, setIsValid],
  // );

  const closeForm = (evt) => {
    debugger;
    if (evt.target.id.split('-')[0] === 'cancel' || evt.key === 'Escape') {
      setCurrentForm(null);
      // resetForm();
    }
  };

  const handleSubmit = (evt) => {
    debugger;
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
      if (currentForm === 'new') {
        newInvoice.status = 'Pending';
      }
    });
    setCurrentInvoice(newInvoice);
    setCurrentForm(null);
  };

  useEffect(() => {
    document.addEventListener('keydown', closeForm);
    return () => {
      document.removeEventListener('keydown', closeForm);
    };
  }, [currentForm]);

  return currentForm && (
    <FormContext.Provider value={state}>
      <FormContainer form={currentForm}>
        <Title>{`${thisForm.title} ${currentInvoice.id}`}</Title>
        {thisForm.fieldsets.map((fieldset) => (
          <FieldSet key={fieldset.id}>
            <Legend>{fieldset.legend}</Legend>
            {fieldset.inputs.map((input) => (
              <Input key={`${input.id}`} data={input} />
            ))}
          </FieldSet>
        ))}
        <FieldSet>
          <DateInput data={dateInputConfig} />
          <Dropdown type="paymentTerms" />
          <Input data={descriptionInputConfig} />
        </FieldSet>
        <ItemsList items={currentInvoice.items} />
        <Buttons>
          <Button id="cancel" type="cancel" handleClick={closeForm} />
          <Button type="saveChanges" handleClick={handleSubmit} />
        </Buttons>
      </FormContainer>
    </FormContext.Provider>
  );
};

export default Form;

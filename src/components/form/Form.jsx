/* eslint-disable max-len */

import React, { useState, useEffect } from 'react';

import AppContext from '../../contexts/AppContext';
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
  const [values, setValues] = useState({});
  // const [, setErrors] = useState({});
  // const [, setIsValid] = useState(false);

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
    if (evt.target.tagName !== 'button' || evt.key === 'Escape') {
      setCurrentForm(null);
      // resetForm();
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newInvoice = { ...currentInvoice };
    debugger;
    Object.entries(values).forEach(([name, value]) => {
      const keys = name.split('.');
      if (keys.length === 3) {
        newInvoice[keys[0]][keys[1]][keys[2]] = value;
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
    <FormContainer form={currentForm}>
      <Title>{`${thisForm.title} ${currentInvoice.id}`}</Title>
      {thisForm.fieldsets.map((fieldset) => (
        <FieldSet key={fieldset.id}>
          <Legend>{fieldset.legend}</Legend>
          {fieldset.inputs.map((input) => (
            <Input key={`${input.id}`} values={values} setValues={setValues} data={input} />
          ))}
        </FieldSet>
      ))}
      <FieldSet>
        <DateInput values={values} setValues={setValues} data={dateInputConfig} />
        <Dropdown type="paymentTerms" />
        <Input values={values} setValues={setValues} data={descriptionInputConfig} />
      </FieldSet>
      <ItemsList items={currentInvoice.items} values={values} setValues={setValues} />
      <Buttons>
        <Button type="cancel" handleClick={closeForm} />
        <Button type="saveChanges" handleClick={handleSubmit} />
      </Buttons>
    </FormContainer>
  );
};

export default Form;

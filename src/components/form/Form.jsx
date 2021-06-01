// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

import AppContext from '../../contexts/AppContext';
import { formConfig, dateInputConfig, descriptionInputConfig } from '../../utils/constants';

import Input from '../input/Input';
import DateInput from '../dateinput/DateInput';
import Dropdown from '../dropdown/Dropdown';
import ItemsList from '../itemslist/ItemsList';
import Button from '../button/Button';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentForm === 'edit') {
      const newInvoice = { ...currentInvoice };
      Object.entries(values).forEach(([name, value]) => {
        const keys = name.split('.');
        if (keys.length === 3) {
          newInvoice[keys[0]][keys[1]][keys[2]] = value;
        } else if (keys.length === 2) {
          newInvoice[keys[0]][keys[1]] = value;
        } else {
          newInvoice[keys[0]] = value;
        }
      });
      setCurrentInvoice(newInvoice);
      setCurrentForm(null);
    }
  };

  const handleCancel = () => {
    setCurrentForm(null);
  };

  return currentForm && (
    <FormContainer form={currentForm}>
      <Title>{`${thisForm.title} ${currentInvoice.id}`}</Title>
      {thisForm.fieldsets.map((fieldset) => (
        <FieldSet>
          <Legend>{fieldset.legend}</Legend>
          {fieldset.inputs.map((input) => (
            <>
              <Input values={values} setValues={setValues} data={input} />
            </>
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
        <Button type="cancel" handleClick={handleCancel} />
        <Button type="saveChanges" handleClick={handleSubmit} />
      </Buttons>
    </FormContainer>
  );
};

export default Form;

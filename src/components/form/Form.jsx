import React, { useState, useEffect } from 'react';

import AppContext from '../../contexts/AppContext';
import FormContext from '../../contexts/FormContext';
import {
  formConfig,
  dateInputConfig,
  descriptionInputConfig,
} from '../../utils/constants';

import Input from './input/Input';
import Dropdown from '../common/dropdown/Dropdown';
import ItemsList from './itemslist/ItemsList';
import Button from '../common/button/Button';

import {
  FormContainer, Title, Span, Buttons, Legend, FieldSet, FlexRow,
} from './style';

const Form = () => {
  const {
    currentForm, currentInvoice, setCurrentInvoice, setCurrentForm,
  } = React.useContext(AppContext);
  const thisForm = formConfig[currentForm];

  const [values, setValues] = useState({ items: currentInvoice.items });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(currentForm === 'edit');
  const state = {
    values, setValues, errors, setErrors, isValid, setIsValid,
  };

  const closeForm = (evt) => {
    if (evt.type === 'click' || evt.key === 'Escape') {
      setCurrentForm(null);
    }
  };

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
        <Title>
          {`${thisForm.title} `}
          <Span form={currentForm}>{`${currentInvoice.id}`}</Span>
        </Title>
        {thisForm.fieldsets.map((fieldset) => (
          <FieldSet key={fieldset.id}>
            <Legend>{fieldset.legend}</Legend>
            {fieldset.inputs.map((input) => (
              <Input key={`${input.id}`} data={input} type="text" />
            ))}
          </FieldSet>
        ))}
        <FieldSet>
          <Input data={dateInputConfig} type="date" />
          <Dropdown type="paymentTerms" />
          <Input data={descriptionInputConfig} />
        </FieldSet>
        <ItemsList items={currentInvoice.items} />
      </FormContainer>
      <Buttons form={currentForm}>
        {currentForm === 'edit' ? (
          <>
            <Button buttonStyle="cancel" id="cancel" handleClick={closeForm} />
            <Button type="submit" disabled={!isValid} buttonStyle="saveChanges" handleClick={handleSubmit} />
          </>
        ) : (
          <>
            <Button buttonStyle="discard" handleClick={closeForm} />
            <FlexRow>
              <Button buttonStyle="saveAsDraft" handleClick={closeForm} />
              <Button type="submit" disabled={!isValid} buttonStyle="saveChanges" handleClick={handleSubmit} />
            </FlexRow>
          </>
        )}
      </Buttons>
    </FormContext.Provider>
  );
};

export default Form;

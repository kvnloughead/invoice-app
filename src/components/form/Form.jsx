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
  const { currentForm: form, currentInvoice: invoice } = React.useContext(AppContext);
  const thisForm = formConfig[form];

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

  return form && (
    <FormContainer form={form}>
      <Title>{`${thisForm.title} ${invoice.id}`}</Title>
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
      <ItemsList items={invoice.items} />
      <Buttons>
        <Button type="cancel" />
        <Button type="saveChanges" />
      </Buttons>
    </FormContainer>
  );
};

export default Form;

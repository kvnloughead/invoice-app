// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';

import AppContext from '../../contexts/AppContext';
import { formConfig, dateInputConfig } from '../../utils/constants';
import Input from '../input/Input';
import DateInput from '../dateinput/DateInput';
import Dropdown from '../dropdown/Dropdown';

import {
  FormContainer, Title, FieldSet, Legend,
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
      <FieldSet>
        <DateInput values={values} setValues={setValues} data={dateInputConfig} />
        <Dropdown type="paymentTerms" />
      </FieldSet>
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
    </FormContainer>
  );
};

export default Form;

// eslint-disable-next-line no-use-before-define
import React from 'react';
// import { ThemeProvider } from 'styled-components';

import AppContext from '../../contexts/AppContext';

import {
  FormContainer, Title, FieldSet, Legend,
} from './style';

const Form = () => {
  const { currentForm: form } = React.useContext(AppContext);
  return (
    <FormContainer form={form}>
      <Title>{form}</Title>
      <FieldSet>
        <Legend>Bar</Legend>
      </FieldSet>
    </FormContainer>
  );
};

export default Form;

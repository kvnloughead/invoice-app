import React from 'react';

import AppContext from '../../contexts/AppContext';
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
import FormContext from '../../contexts/FormContext';

const Form = () => {
  const { currentForm, currentInvoice, closeAllPopups } = React.useContext(AppContext);
  const thisForm = formConfig[currentForm];

  const {
    isValid, handleSubmit, // closeForm,
  } = React.useContext(FormContext);

  return currentForm && (
    <>
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
            <Button buttonStyle="cancel" id="cancel" handleClick={closeAllPopups} />
            <Button type="submit" disabled={!isValid} buttonStyle="saveChanges" handleClick={handleSubmit} />
          </>
        ) : (
          <>
            <Button buttonStyle="discard" handleClick={closeAllPopups} />
            <FlexRow>
              <Button buttonStyle="saveAsDraft" handleClick={closeAllPopups} />
              <Button type="submit" disabled={!isValid} buttonStyle="saveChanges" handleClick={handleSubmit} />
            </FlexRow>
          </>
        )}
      </Buttons>
    </>
  );
};

export default Form;

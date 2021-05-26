// eslint-disable-next-line no-use-before-define
import React from 'react';
import PropTypes from 'prop-types';

import { buttonLabels } from '../../utils/constants';
import { ButtonContainer, PlusInCircle } from './style';

const Button = ({ type }) => (
  <>
    <ButtonContainer type={type}>
      {type === 'newInvoice' && <PlusInCircle />}
      { buttonLabels[type] }
    </ButtonContainer>
  </>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Button;

import React from 'react';

import { buttonConfig } from '../../utils/constants';
import { ButtonContainer, PlusInCircle } from './style';


const Button = ({ type, mode }) => {
      return (
        <>
          <ButtonContainer type={type} mode={mode} styles={buttonConfig[type].styles}>
            {type === 'newInvoice' && <PlusInCircle />}
            { buttonConfig[type].label }
          </ButtonContainer></>
      );
};

export default Button;
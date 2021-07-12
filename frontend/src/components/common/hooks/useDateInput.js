import { useRef, useState } from 'react';
import { formatDate } from '../../../utils/helpers';

const useDateInput = (currentInvoice) => {
  const dateRef = useRef(null);
  const formattedDate = (dateRef.current && formatDate(dateRef.current.value))
                        || formatDate(currentInvoice.createdAt);
  const [displayValue, setDisplayValue] = useState(formattedDate);

  const handleFocus = () => {
    setDisplayValue('');
  };

  const handleBlur = () => {
    setDisplayValue(formattedDate);
  };

  return { displayValue, handleFocus, handleBlur };
};

export default useDateInput;

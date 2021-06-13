import { useState } from 'react';
// import { formatDate } from '../../../utils/helpers';

const useVariableInputDisplay = (currentInvoice, initialValue) => {
  // const dateRef = useRef(null);
  // const formattedDate = (dateRef.current && formatDate(dateRef.current.value))
  //                       || formatDate(currentInvoice.createdAt);
  const [displayValue, setDisplayValue] = useState(initialValue);

  const handleFocus = () => {
    setDisplayValue('');
  };

  const handleBlur = () => {
    setDisplayValue(initialValue);
  };

  return { displayValue, handleFocus, handleBlur };
};

export default useVariableInputDisplay;

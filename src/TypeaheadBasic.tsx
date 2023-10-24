import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getData } from './api/getData';
import { useState } from 'react';

export const TypeaheadBasic = () => {
  const [optionsCityState, setOptionsCityState] = useState([]);
  const [optionZipCode, setOptionZipCode] = useState([]);

  const fetchData = async (value: string) => {
    const { cityState, zipCode } = await getData(value);

    setOptionsCityState(cityState);
    setOptionZipCode(zipCode);
  };

  const onInputChangeValue = (input: string) => {
    if (input !== '') {
      fetchData(input);
    }
  };

  return (
    <>
      <Typeahead
        onInputChange={onInputChangeValue}
        id='typeahead-basic'
        minLength={1}
        options={[...optionZipCode, ...optionsCityState]}
        className='m-4 w-25'
      />
    </>
  );
};

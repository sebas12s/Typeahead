import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Get } from "./api/Get";
import { useState } from "react";

export const TypeaheadBasic = () => {
  const [optionsCityState, setOptionsCityState] = useState([]);
  const [optionZipCode, setOptionZipCode] = useState([]);

  const fetchData = async (value: string) => {
    const { cityState, zipCode } = await Get(value);
    setOptionsCityState(cityState);
    setOptionZipCode(zipCode);
  };

  const onInputChangeValue = (input: string) => {
    if (input !== "") {
      fetchData(input);
    }
  };

  return (
    <>
      <Typeahead
        onInputChange={onInputChangeValue}
        maxResults={5}
        id="typeahead-basic"
        minLength={1}
        options={[...optionZipCode, ...optionsCityState]}
        className="m-4 w-25"
        paginate={false}
      />
    </>
  );
};
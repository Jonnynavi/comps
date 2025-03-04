import { useState } from "react";
import Dropdown from "../components/DropDown";

function DropDownPage(){
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'red', value: 'red' },
    { label: 'green', value: 'green'},
    { label: 'blue', value: 'blue'}
  ];

  return <Dropdown options={options} value={selection} onChange={handleSelect} />;
}

export default DropDownPage;
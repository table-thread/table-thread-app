import React from "react";
import { Select } from "antd";

const MultiSelectTag = (props: any) => {
  const {  placeHolder,  option,  selected, label, onChangeEvent,  disabled = false,  id, } = props;


  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log("this is selected value" , value)
    onChangeEvent(value);
  };

  return (
    <div className="sl-wr">
      <label className="sl-label">{label}</label>
      <Select
        labelInValue
        mode="multiple"
        style={{ width: '100%'}}
        placeholder={placeHolder}
        defaultValue={selected}
        onChange={handleChange}
        id={id}
        options={option}
        className="from-global"
        disabled={disabled}
        tokenSeparators={[',']}
      
      />
    </div>
  );
};

export default MultiSelectTag;

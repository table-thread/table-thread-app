import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


const CustomCheckbox = (props: any) => {

  const { title, checked = false, disabled = false, onChangeEvent, titleVisible = true } = props;

  const onChange = (e: CheckboxChangeEvent) => {
    // console.log(`checked = ${e.target.checked}`);
    onChangeEvent(e.target.checked);
  };

  const doNothing = (e: CheckboxChangeEvent) => {
  };
  

  return(
    <Checkbox
      onChange={ onChangeEvent ? onChange : doNothing }
      // checked={checked}
      disabled={disabled}
    >{ titleVisible ? title : ""}</Checkbox>
  )
};

export default CustomCheckbox;
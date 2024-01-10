import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

const TextAreaComp = (props: any) => {

  const { label, placeholder = "", id, name, disabled = false, maxLength, onChangeEvent, rows, defaultValue = undefined, value } = props;

  return (
    <div className="simple-input" >
      <label className="input-label" >{label}</label>
      <div className="input-sec" >
        {value !== undefined ?
          <TextArea
            id={id}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChangeEvent}
            value={value}
            rows={rows}
          />
          :
          <TextArea
            id={id}
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChangeEvent}
            rows={rows}
          />}
      </div>
    </div>
  );

}

export default TextAreaComp;
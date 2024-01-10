/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { Input } from 'antd';

const CustomInput = (props: any) => {

  const { label, placeholder = "", id, name, type, disabled = false, maxLength,minLength, asterisk = false, onChangeEvent, defaultValue = undefined, title = true, value } = props;

  return (
    <div className="simple-input" >
      {label !== undefined ?  
      <label className={`input-label ${title === true ? '  ' : ' d-none m-0 '} `} >{label} {asterisk === true ? <big><sup>*</sup></big> : ""} </label>
      :
      ""
      }
      {value !== undefined ?
        <div className="input-sec" >
          <Input 
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
            onChange={onChangeEvent}
            value={value}
          />
        </div>
        :
        <div className="input-sec" >
          <Input
            id={id}
            name={name}
            placeholder={placeholder}
            type={type}
            disabled={disabled}
            maxLength={maxLength}
            minLength={minLength}
            onChange={onChangeEvent}
            defaultValue={defaultValue ? defaultValue : ""}
          />
        </div>
      }
    </div>
  );
}

export default CustomInput;
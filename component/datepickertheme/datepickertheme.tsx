import React from 'react';
import { DatePicker } from 'antd';


const DatePickerTheme = (props: any) => {

  // console.log(" props ", props);
  let dyprops: any = {};

  const {
    title = true,
    label,
    onChangeEvent,
    tag = "none",
    disabled = false,
    allowClear = false,
    format = "DD-MM-YYYY",
    placeholder,
    defaultValue = null,
    value = null,
    disabledDate = null,
    asterisk= false
  } = props;


  const onChange = (date: any, dateString: any) => {
    onChangeEvent(dateString);
  };

  Object.assign(dyprops, { onChange: onChange });
  Object.assign(dyprops, { picker: "date" });
  Object.assign(dyprops, { inputReadOnly: false });
  Object.assign(dyprops, { disabled: disabled });
  Object.assign(dyprops, { placeholder: placeholder });
  Object.assign(dyprops, { format: format });
  Object.assign(dyprops, { allowClear: allowClear });

  if (defaultValue) { Object.assign(dyprops, { defaultValue: defaultValue }) }
  if (value) { Object.assign(dyprops, { value: value }) }
  if (disabledDate) { Object.assign(dyprops, { disabledDate: disabledDate }) }

  return (
    <div className="sl-wr" >
      <label className={` sl-label ${title == true ? '  ' : ' d-none '} `} >{label} {asterisk === true ? <big><sup className='text-danger' >*</sup></big> : ""} </label>
      <div className="" >
        <DatePicker {...dyprops} />
      </div>
      <div className={` mt-1 input-tag ${tag === "none" ? ' d-none ' : ' d-block '} `} >{tag}</div>
    </div >
  );
}

export default DatePickerTheme;
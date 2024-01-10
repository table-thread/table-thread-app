import React from 'react';
import { Select } from 'antd';

const SimpleSelectLabel = (props: any) => {

  let dyprops: any = {};

  const {
    option,
    selected,
    label,
    tag = "none",
    onChangeEvent,
    disabled = false,
    id,
    title = true,
    value = null
  } = props;

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    onChangeEvent(value);
  };

  Object.assign(dyprops, { labelInValue: true });
  Object.assign(dyprops, { defaultValue: selected });
  Object.assign(dyprops, { onChange: handleChange });
  Object.assign(dyprops, { id: id });
  Object.assign(dyprops, { options: option });
  Object.assign(dyprops, { className: "from-global" });
  Object.assign(dyprops, { disabled: disabled });

  if (value) { Object.assign(dyprops, { value: value }) }
  // if (value) { Object.assign(dyprops, { value: value }) }

  return (
    <div className={` sl-wr ${title === true ? '' : 'h-45'} `} >
      <label className={` ${title === true ? '  ' : ' d-none m-0 '} sl-label`} >{label}</label>
      <Select {...dyprops} />
      <div className={` input-tag ${tag === "none" ? ' d-none ' : ' d-block '} `} >{tag}</div>
    </div>
  );


};

export default SimpleSelectLabel;
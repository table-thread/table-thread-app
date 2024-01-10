import React from 'react';
import { Select } from 'antd';
import { isEmpty } from '@/utils/helper';

const SearchSelect = (props: any) => {

  const { option, placeholder, label, tag = "none", onChangeEvent, disabled = false, loading = false, selected = "", id, title = true, value, from = 'a' } = props;

  const onChange = (value: string, label: any) => {
    // onChangeEvent({ value: value, label: label });
    onChangeEvent(label);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  return (
    <div className={` sl-wr ${title === true ? '' : 'h-45' } `} >
      <label className={` ${title === true ? '  ' : ' d-none m-0 '} sl-label`} >{label}</label>
      {isEmpty(value) ?
        <Select
          showSearch
          optionFilterProp="children"
          className={` from-global ${from}`}
          placeholder={placeholder}
          disabled={disabled}
          id={id}
          onChange={onChange}
          options={option}
          defaultValue={selected}
          loading={loading}
          filterOption={(input, option: any) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
        />
        :
        <Select
          showSearch
          optionFilterProp="children"
          className={` from-global ${from} `}
          placeholder={placeholder}
          disabled={disabled}
          id={id}
          onChange={onChange}
          options={option}
          value={value}
          defaultValue={selected}
          loading={loading}
          filterOption={(input, option: any) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
        />
      }
      <div className={` input-tag ${tag === "none" ? ' d-none ' : ' d-block '} `} >{tag}</div>
    </div>
  );


};

export default SearchSelect;
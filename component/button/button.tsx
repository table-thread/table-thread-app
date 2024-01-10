import React from 'react';

const ThemeButton = (props: any) => {

  const { type, title } = props;

  return (
    <button type="button" className={`px-3 py-0  ${type} `} >{title}</button>
  );
}

export default ThemeButton;
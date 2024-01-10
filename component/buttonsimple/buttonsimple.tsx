import React from 'react';

const ButtonSimple = (props: any) => {

  const { type, title, onClickEvent, disabled = false, id = "" } = props;

  function tempTo() { 
    
  }

  return (
    <button
      type="submit"
      onClick={disabled === true ? tempTo : (onClickEvent ? onClickEvent : tempTo)}
      className={` btn-sm ${type} ${disabled === true ? " disable " : " enable "} `}
      id={id}
    >{title}</button>
  );
}

export default ButtonSimple;
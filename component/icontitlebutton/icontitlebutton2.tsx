/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import Image from 'next/image';


const IconTitleButton2 = (props: any) => {

  const { icon, title, onClickCall, width, height } = props;

  function empobj() { }

  return (
    <button type="button" className="ilb-self" onClick={onClickCall ? onClickCall : empobj} >
      <span className="fs-30" >{icon} </span>
      <span className="ms-2" >{title}</span>
    </button>
  );
}

export default IconTitleButton2;
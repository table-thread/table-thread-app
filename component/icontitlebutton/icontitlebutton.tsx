import React from 'react';
import Image from 'next/image';


const IconTitleButton = (props: any) => {

  const { imgSrc, title, onClickCall, width = 24, height = 24 , disabled =false} = props;

  function empobj() { }

  return (
    <button type="button" disabled = {disabled} className={disabled ? "ilb-self-disabled" : "ilb-self"} onClick={onClickCall ? onClickCall : empobj} >
      <Image src={imgSrc} alt="add icon" width={width} height={height} />
      <span className="ms-2" >{title}</span>
    </button>
  );
}

export default IconTitleButton;
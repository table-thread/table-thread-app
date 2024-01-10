import React from 'react';
import { Popover } from 'antd';

const CustomPopOver = (props: any) => {

  const { title, children , itemList } = props;

  const content = (<div> {...itemList.map((item : any) => <p>{item}</p> )} </div> );

  return (
    <Popover content={content} title={title}> {children} </Popover>
  );
}

export default CustomPopOver;
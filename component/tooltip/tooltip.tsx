import React from 'react';
import { Tooltip } from 'antd';

const CustomTooltip = (props: any) => {

  const { title, children, placement = "top" ,classNames =""} = props;

  return (
    <Tooltip className={classNames} placement={placement} title={title} > {children} </Tooltip>
  );
}

export default CustomTooltip;
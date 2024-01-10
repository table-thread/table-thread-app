import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";

import SwitchComponent from "@/component/switch/switch";
import CustomTooltip from "@/component/tooltip/tooltip";

const SwitchWithInfoComp = (props: any): any => {
  
  const { defaultChecked, label, onChangeEvent, toolTipTitle} = props;

  return (
    <div className="d-flex gap-3 align-items-center">
      <SwitchComponent
        defaultChecked={defaultChecked}
        label={label}
        onChangeEvent={onChangeEvent}
      />

      <div className="d-flex align-items-center">
        <CustomTooltip
          placement="topLeft"
          title={toolTipTitle}
        >
          <InfoCircleOutlined
            className="d-flex"
            style={{ fontSize: "16px", color: "#EA7A3A" }}
            rev=""
          />
        </CustomTooltip>
      </div>
    </div>
  );
};

export default SwitchWithInfoComp;

import React from 'react';
import { Modal } from 'antd';

import ButtonSimple from '@/component/buttonsimple/buttonsimple';

const TAG = "AlertPermissionBox: ";
const AlertPermissionBox = (props: any) => {

  const { modalBool, setModal,setIsDeleted ,title } = props;

  const fallbackModal = (calledWith:any) => {
    console.log(TAG , " : fallabck is calling.....");
    if(calledWith === "yes"){
      setIsDeleted(true);
      console.log("yes are deleting now this invoice.....");
    }
    setModal(false);     
  } 

  return (
    <Modal
      centered
      open={modalBool}
      width={350}
    >
      <div className="modal-wrapper" >
        <div className="fs-16 text-center mt-3" > <span className='p-2 mb-3'>{title}</span> </div>
        {/* <div className='d-flex justify-content-between mt-5 mb-3'>            */}
          {/* <div className="" > <IconButton imgSrc={back} onClickCall={fallbackModal} /> </div> */}
          <div className="d-flex justify-content-center align-items-center w-100" >
            <div className='d-flex justify-content-center align-items-center w-100'>
              <div className='d-flex justify-content-between mt-5 mb-3 w-50'>
                <div className="d-flex justify-content-center align-items-center w-50" >  
                  <div className='d-flex'> 
                    <ButtonSimple title="Yes" onClickEvent ={()=>fallbackModal("yes")} type="voilet" /> 
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center w-50" >
                  <div className='d-flex'>
                    <ButtonSimple title="No" onClickEvent ={()=>fallbackModal("no")} type="voilet" />
                  </div>
                </div>
              </div>
            </div> 
          </div>      
        
        {/* </div> */}
      </div>
    </Modal>
  );
}

export default AlertPermissionBox;
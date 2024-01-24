import React from 'react'
import { Modal } from 'antd';

const DeleteProduct = (props: any) => {

  const { openDeleteModal, setOpenDeleteModal, } = props

  const handleCancel = () => {
    setOpenDeleteModal(false);

  };

  return (
    <div>
      <Modal title="Delete Item" open={openDeleteModal} onCancel={handleCancel} onOk={handleCancel} >
        <p>for delete item click ok</p>
      </Modal>
    </div>
  )
}

export default DeleteProduct

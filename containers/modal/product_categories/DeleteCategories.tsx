import React from 'react'
import { Modal } from 'antd';


const DeleteCategories = (props: any) => {

  const {openDeleteModal, setDeleteOpenModal} = props

  const handleDeleteItem = () => {
    // const newProductItems = product.filter((iten, index) => index !== item)
    // console.log(newProductItems);
    // setProduct(newProductItems);
    setDeleteOpenModal(false);
  }

  return (
    <>
      <Modal title="Delete Item" open={openDeleteModal} onCancel={handleDeleteItem} onOk={() => handleDeleteItem} >
        <p>for delete item click ok</p>
      </Modal>
    </>
  )
}

export default DeleteCategories

import React from 'react'
import { Modal } from 'antd';


const DeleteCategories = (props: any) => {

  const { openDeleteModal, setDeleteOpenModal, product, setProduct } = props

  const handleDeleteItem = () => {
    // const newProductItems = product.filter((iten, index) => index !== item)
    // console.log(newProductItems);
    // setProduct(newProductItems);
    setDeleteOpenModal(null);
  }

  const handlelOk = (idx: any) => {
    // if (openDeleteModal) {
      const filteredProduct: any = product.filter((product: any, index: any) => index !== openDeleteModal);
      setProduct(filteredProduct);
      console.log('delete page : ', filteredProduct);
    // };
    setDeleteOpenModal(null);
  }

  return (
    <>
      <Modal title="Delete Item" open={openDeleteModal !== null ? true : false} onCancel={handleDeleteItem} onOk={handlelOk} >
        <p>for delete item click ok</p>
      </Modal>
    </>
  )
}

export default DeleteCategories

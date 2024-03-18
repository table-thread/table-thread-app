import React from 'react'
import { Modal } from 'antd';

const DeleteProduct = (props: any) => {

  const { openDeleteModal, setOpenDeleteModal, setProduct } = props

  const handleCancel = () => {
    setOpenDeleteModal(null);
  };

  const handlelOk = (idx: any) => {
    const dataFromLocalStorage = localStorage.getItem('productData');
    if (dataFromLocalStorage) {
      const parsedData = JSON.parse(dataFromLocalStorage);
      const filteredProduct: any = parsedData.filter((product: any, index: any) => index !== openDeleteModal);
      setProduct(filteredProduct);
      console.log('delete page : ', filteredProduct);
    };
    setOpenDeleteModal(null);
  }


  return (
    <div>
      <Modal title="Delete Item" open={openDeleteModal !== null ? true : false} onCancel={handleCancel} onOk={handlelOk} >
        <p>for delete item click ok</p>
      </Modal>
    </div>
  )
}

export default DeleteProduct

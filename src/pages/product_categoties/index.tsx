import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { ICMdEdit, ICBsTrash3Fill } from '@/utils/icons';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

import AddCategories from '@/containers/modal/product_categories/AddCategories';
import EditCategories from '@/containers/modal/product_categories/EditCategories';
import DeleteCategories from '@/containers/modal/product_categories/DeleteCategories';



const ProductCategories = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState<Boolean>(false);
  const [deleteOpen, setDeleteOpen] = useState<Boolean>(false);

  const [product, setProduct] = useState([
    {
      category: 'Starter',
      date: '18-01-2024',
      items: 10
    },
    {
      category: 'fast-food',
      date: '18-01-2024',
      items: 15
    },
    {
      category: 'desert',
      date: '18-01-2024',
      items: 4
    },
  ]);

  return (
    <HomeLayout>
      <div>
        <div className='col-12'>
          <Card className='mb-4 ps-3 box-shadow'>
            <div className='d-flex justify-content-between align items-center mb-5'>
              <div className='fw-bold fs-4' >Products Categories</div>
              <Button onClick={() => setIsModalOpen(true)}>Add New Product</Button>

            </div>
            <div className='row border-bottom pb-3'>
              <div className='col-2 fw-bold'>Sr. No</div>
              <div className='col-2 fw-bold'>Name</div>
              <div className='col-2 fw-bold'>Created Date</div>
              <div className='col-2 fw-bold'>Items</div>
              <div className='col-2 fw-bold'>View</div>
            </div>


            {product.map((item, index) => {
              return (
                <div className='row border-bottom align-items-center'>
                  <div className='col-2 my-3 fw-bolder'>
                    {index + 1}
                  </div>
                  <div className='col-2'>{item.category}</div>
                  <div className='col-2'>{item.date}</div>
                  <div className='col-2'>{item.items}</div>
                  <div className='col-2 d-flex gap-3'>
                    <div className='table-icons mb-3' >
                      <div onClick={() => setEditOpen(true)}><ICMdEdit /></div>
                    </div>
                    <div className='table-icons'>
                      <div onClick={() => setDeleteOpen(true)}><ICBsTrash3Fill /></div>
                    </div>
                  </div>

                </div>
              )
            })}
          </Card>
        </div>
        <>
          <AddCategories
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
          />

          <EditCategories
            openEditModal={editOpen}
            setOpenEditModal={setEditOpen}
          />

          <DeleteCategories
            openDeleteModal={deleteOpen}
            setDeleteOpenModal={setDeleteOpen}
          />


        </>
      </div>
    </HomeLayout>
  )
}

export default ProductCategories;

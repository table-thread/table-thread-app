import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { ICMdEdit, ICBsTrash3Fill } from '@/utils/icons';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

import AddCategories from '@/containers/modal/product_categories/AddCategories';
import EditCategories from '@/containers/modal/product_categories/EditCategories';
import DeleteCategories from '@/containers/modal/product_categories/DeleteCategories';

const TAG = "Product Categories: ";

const ProductCategories = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState<any>(null);
  const [deleteOpen, setDeleteOpen] = useState<any>(null);

  const [product, setProduct] = useState([
    {
      category: 'Starter',
      date: '2024-08-01',
      items: 10
    },
    {
      category: 'fast-food',
      date: '2023-01-24',
      items: 15
    },
    {
      category: 'desert',
      date: '2020-05-22',
      items: 4
    },
    {
      category: 'lunch',
      date: '2023-05-18',
      items: 14
    }
  ]);

  return (
    <HomeLayout>
      <div className='col-12'>
        <Card className='mb-4 ps-3 box-shadow'>

          <div className='d-flex justify-content-between align items-center mb-5'>
            <div className='fw-bold fs-4' >Products Categories</div>
            <Button onClick={() => setIsModalOpen(true)}>Add New Product</Button>
          </div>

          <div className='row border-bottom pb-3'>
            <div className='col-lg-2 col-md-2 col-2 fw-bold'>Sr. No</div>
            <div className='col-2 fw-bold'>Name</div>
            <div className='col-2 fw-bold'>Created Date</div>
            <div className='col-2 fw-bold'>Items</div>
            <div className='col-2 fw-bold'>View</div>
          </div>

          {product.map((item, index) => {
            return (
              <div className='row border-bottom align-items-center' key={index}>
                <div className='col-2 my-3 fw-bolder'>
                  {index + 1}
                </div>
                <div className='col-2'>{item.category}</div>
                <div className='col-2'>{item.date}</div>
                <div className='col-2'>{item.items ? item.items : '13'}</div>
                <div className='col-4 d-flex gap-3'>
                  <div className='table-icons ' >
                    <div onClick={() => setEditOpen(item)}><ICMdEdit /></div>
                  </div>
                  <div className='table-icons mx-3'>
                    <div onClick={() => setDeleteOpen(index)}><ICBsTrash3Fill /></div>
                  </div>
                </div>
              </div>
            )
          })}
        </Card>
      </div>
      <>
        {isModalOpen !== null ?
          <AddCategories
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
            addCategorie={setProduct}
          />
          :
          ""
        }

        {editOpen !== null ?
          <EditCategories
            openEditModal={editOpen}
            setOpenEditModal={setEditOpen}
            setProduct={setProduct}
          />
          :
          ""
        }

        {deleteOpen !== null ?
          <DeleteCategories
            openDeleteModal={deleteOpen}
            setDeleteOpenModal={setDeleteOpen}
            product={product}
            setProduct={setProduct}
          />
          :
          ""
        }
      </>
    </HomeLayout>
  )
}

export default ProductCategories;

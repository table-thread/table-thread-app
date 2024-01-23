import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import axios from 'axios';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

import { Button, Card, Modal, Input } from 'antd';

import { ICIoEye, ICIoEyeOff, ICMdEdit, ICBsTrash3Fill } from '@/utils/icons';
import { productSchemaNewProduct, } from '@/utils/schema';
import { Formik, Form } from 'formik';

import CustomInput from '@/component/input/input';
import Loader from '@/component/loader/loader';
import ButtonSimple from '@/component/buttonsimple/buttonsimple';



const Product = () => {

  const [product, setProduct] = useState([]);
  const [imageView, setImageView] = useState<boolean>(false);

  const api = 'https://jsonplaceholder.typicode.com/todos';

  async function registerCall(addJson: any): Promise<void> {
    try {
      // const response = await fetch(api)
      const response = await axios(addJson)
      if(response.status == 200){
      console.log("response is 200");
      console.log(response.data);
      }
      // await response.json().then((data: any) => {
      //   console.log('Data:', data);
      // });
    
    } catch (error) {
      console.error('Error:', error);
    }
  }



  // async function apihandler(api: any) {
  //   const response = await fetch(api);
  //   const movies = await response.json();
  //   // console.log(movies);
  //   setProduct(movies)
  // }

  // apihandler(api)
  registerCall(api)



  async function imageViewOpen(formValues: any) {
    setImageView(!imageView);
  }


  return (
    <HomeLayout>
      <div>
        <div className='col-12'>
          <Card className='mb-4 ps-3 box-shadow'>

            {product.map((item: any, index) => {
              return (
                <div key={item.id} className='row border-bottom align-items-center'>
                  <div className='col-2 my-3 fw-bolder'>
                    {index + 1}
                  </div>
                  <div className='col-2'>{item.title}</div>
                  <div className='col-2'>{item.id}</div>
                  {/* <div className='col-2'>{item.category}</div> */}
                  {/* <div className='col-2'>{item.amount}</div> */}
                  <div className='col-2 d-flex gap-3'>
                    <div className='table-icons' onClick={() => imageViewOpen}>
                      {imageView ? <ICIoEyeOff /> : <ICIoEye />}
                    </div>
                    <div className='table-icons' onClick={() => setImageView(!imageView)}>
                      {<ICMdEdit />}
                    </div>
                    <div className='table-icons' onClick={() => setImageView(!imageView)}>
                      {<ICBsTrash3Fill />}
                    </div>
                  </div>

                </div>
              )
            })}
          </Card>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Product;

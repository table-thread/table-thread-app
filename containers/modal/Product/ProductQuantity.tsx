import React, { Fragment } from 'react';

import { Button } from 'antd';

import { ICBsTrash3Fill } from '@/utils/icons';

import CustomInput from '@/component/input/input';

const TAG = 'Product Quantity';

const ProductQuantity = (props: any) => {

  const { handleAddRow, handleRemoveSpecificRow, rows, setRows } = props

  const columnsArray = ["quantity", "quantityPrice"];

  const updateState = (e: any, index: number, column: string) => {
    const newValue = e.target.value;

    const updatedRows = rows.map((row: any, rowIndex: number) => {
      if (rowIndex === index) {
        return { ...row, [column]: newValue };
      }
      return row;
    });

    setRows(updatedRows);
  };


  return (
    <>
      <div className='row my-2'>
        <div className="col-5 fw-bold text-center">Quantity</div>
        <div className="col-5 fw-bold text-center">Price</div>

        {rows.map((item: any, idx: any) => (
          <div className='row my-2' key={`ukey${idx}`}>
            {columnsArray.map((column, index) => (
              <Fragment key={index}>
                <div className="col-5">
                  <CustomInput
                    id="quantity"
                    name="quantity"
                    placeholder={column}
                    type="text"
                    value={item[column] || ''}
                    disabled={false}
                    maxLength={250}
                    asterisk={false}
                    onChangeEvent={(e: any) => updateState(e, idx, column)}
                  />
                </div>
              </Fragment>
            ))}
            <div className='col-2'>
              <Button
                className="btn btn-sm"
                onClick={() => handleRemoveSpecificRow(idx)}
              >
                <ICBsTrash3Fill />
              </Button>
            </div>
          </div>
        ))}
        <div className='clo-2'>
          <Button onClick={handleAddRow}>
            Add Row
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductQuantity

import React from 'react';

import { ICDownOutlined, ICTeamOutlined } from '@/utils/icons'
import { revenuChart, modernPageImage2, modernPageImage3, modernPageImage4 } from '@/utils/image';
import { Button, Card, Space, Col, Row } from 'antd';

import HomeLayout from '@/containers/HomeLayout/HomeLayout';

const Modern = () => {
  // console.log(logo);
  const array = [1, 2, 3, 4];
  const array2 = [1, 2, 3, 4];
  return (
    <HomeLayout>

      <div className='row gy-4 text-center'>
        {array.map((x) => {
          return (
            <div className='col-lg-3 col-md-3 col-sm-4 col-12' key={x}>
              <Card className='bg-info px-1'>
                {/* <ICTeamOutlined className='fs-1' /> */}
                <ICTeamOutlined />
                <p className='fs-5 my-1'>employees</p>
                <p className='fs-5 m-0'>96</p>
              </Card>
            </div>
          )
        })}
      </div>

      <div className='row'>
        <div className='col-lg-8 col-md-12' >
          <Card className=' my-4 box-shadow'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='' >
                <p className='fw-medium fs-5 my-0'>revenu updates</p>
                <p className=''>Overview of profit</p>
              </div>
              {/* <div className=''> */}
              <Button>march 2023 <ICDownOutlined /></Button>
              {/* </div> */}
            </div>
            <div className='row'>
              <div className='col-lg-8 col-md-8 '>
                <img className='w-100' src={revenuChart} alt='revenu-chart' />
              </div>
              <div className='col-lg-4 col-md-4'>
                <div className='d-flex align-items-center my-3'>
                 {/* <ICTeamOutlined className='fs-2 mx-3' /> */}
                  <ICTeamOutlined />

                  <div>
                    <p className='m-0 fs-3'>$55,26,566</p>
                    <p className='m-0'>total earnings</p>
                  </div>
                </div>
                <div className='d-flex align-items-center my-3'>
                 {/* <ICTeamOutlined className='fs-2 mx-3' /> */}
                  <ICTeamOutlined />

                  <div>
                    <p className='m-0'>total earnings</p>
                    <p className='m-0 fs-5'>$55,26,566</p>
                  </div>
                </div>
                <div className='d-flex align-items-center my-3'>
                 {/* <ICTeamOutlined className='fs-2 mx-3' /> */}
                  <ICTeamOutlined />

                  <div>
                    <p className='m-0'>total earnings</p>
                    <p className='m-0 fs-5'>$5526566</p>
                  </div>
                </div>
                <Button className='px-5 my-4 bg-primary'>view full report</Button>
              </div>
            </div>
          </Card>
        </div>
        <div className='col-lg-4 col-md-12 my-4 '>
          <Card className='mb-4 box-shadow'>
            <Row >
              <Col span={12}>
                <h3 className='fs-5 '>Yearly Breakup</h3>
                {/* <div className=' '> */}
                <div className='mt-4' >
                  <h3 className='fs-4'>$36,358</h3>
                  <p className=''>+9% last year</p>
                </div>
                <p className='mt-4'>*2022 *2023</p>
                {/* </div> */}
              </Col>
              <Col span={12} className='d-flex justify-content-center align-items-center'><div className='p-4 rounded-circle' style={{ border: "10px solid blue", }}></div></Col>
            </Row>
          </Card>
          <Card className='box-shadow'>
            <Row>
              <Col span={12}>
                <h3 className='fs-5 '>Yearly Breakup</h3>
                <div className='mt-3' >
                  <h3 className='fs-4'>$36,358</h3>
                  <p className=''>+9% last year</p>
                </div>
              </Col>
              <Col span={12} className='d-flex justify-content-end'><div className='px-3 rounded-circle text-white fs-4' style={{ backgroundColor: 'blue', width: 40, height: 40 }}>$</div></Col>
            </Row>
            <Col span={24}><img src={modernPageImage2} className='w-100' alt='#' /></Col>
          </Card>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-4 col-md-12'>
          <Card className='mb-4 box-shadow'>
            <div>
              <p className='fw-medium fs-5 my-0'>Employee Salary</p>
              <p className='mb-0'>Every month</p>
            </div>
            <img className='w-100' src={modernPageImage3} alt='revenu-chart' />
            <Row className=''>
              <Col span={12} className='d-flex align-items-center my-3'>
                {/* <ICTeamOutlined className='fs-2 mx-3' /> */}
               <ICTeamOutlined />
                <div>
                  <p className='m-0'>Salary</p>
                  <p className='m-0 fs-4'>$36,358</p>
                </div>
              </Col>
              <Col span={12} className='d-flex align-items-center my-3'>
                {/* <ICTeamOutlined className='fs-2 mx-3' /> */}
               <ICTeamOutlined />
                <div>
                  <p className='m-0'>Profit</p>
                  <p className='m-0 fs-5'>$5,296</p>
                </div>
              </Col>
            </Row>
          </Card>
        </div>

        <Col span={8} className=' '>
          <Space size={20}>
            <Col span={24}>
              <Card className='box-shadow'>
                <Row>
                  <Col span={12}>
                    <h3 className='fs-5 '>Yearly Breakup</h3>
                    <div className='mt-3' >
                      <h3 className='fs-4'>$36,358</h3>
                      <p className=''>+9% last year</p>
                    </div>
                  </Col>
                </Row>
                <Col span={24}><img src={modernPageImage2} className='w-100' alt='#' /></Col>
              </Card>
            </Col>
            <Col span={24}>
              <Card className='box-shadow'>
                <Row>
                  <Col span={12}>
                    <h3 className='fs-5 '>Yearly Breakup</h3>
                    <div className='mt-3' >
                      <h3 className='fs-4'>$36,358</h3>
                      <p className=''>+9% last year</p>
                    </div>
                  </Col>
                </Row>
                <Col span={24}><img src={modernPageImage2} className='w-100' alt='#' /></Col>
              </Card>
            </Col>
          </Space>
          <Card className='mt-4 box-shadow'>
            <Row>
              <Col span={12}>
                <h3 className='fs-5 '>Yearly Breakup</h3>
                <div className='mt-3' >
                  <h3 className='fs-4'>$36,358</h3>
                  <p className=''>+9% last year</p>
                </div>
              </Col>
              <Col span={12} className='d-flex justify-content-end'><div className='px-3 rounded-circle text-white fs-4' style={{ backgroundColor: 'blue', width: 40, height: 40 }}>$</div></Col>
            </Row>
            <Col span={24}><img src={modernPageImage2} className='w-100' alt='#' /></Col>
          </Card>
        </Col>

        <Col span={8} className=''>
          <Card className='mb-4 bg-primary text-light box-shadow'>
            <div>
              <h3 className='fs-5'>Best selling products</h3>
              <p>Overview 2023</p>
              {/* <div> */}
              <img style={{ width: "85.33%" }} src={modernPageImage4} alt='#' />
              {/* </div> */}
            </div>
            <Card className=''>
              <Col className='d-flex align-items-center justify-content-between'>
                <div>
                  <h3 className='fs-5 m-0'>MaterialPro</h3>
                  <p className='mb-2'>$23,568</p>
                </div>
                <div className='bg-info px-2 rounded'>55%</div>
              </Col>
              <div className='rounded-pill' style={{ backgroundColor: 'blue', height: 3 }}></div>

              <Col className='d-flex align-items-center justify-content-between'>
                <div>
                  <h3 className='fs-5 m-0'>MaterialPro</h3>
                  <p className='mb-2'>$23,568</p>
                </div>
                <div className='bg-info px-2 rounded'>55%</div>
              </Col>
              <div className='rounded-pill' style={{ backgroundColor: 'blue', height: 3 }}></div>
            </Card>
          </Card>
        </Col>
      </div>

      <div className='row'>
        <Col span={8} className=' '>
          <Card className='mb-4 box-shadow'>
            <Col >
              <p className='fw-medium fs-5 my-0'>Weekly Stats</p>
              <p className='mb-0'>Average sales</p>
            </Col>
            <Col span={24} className=' my-4'>
              <img className='w-100' src={modernPageImage2} alt='revenu-chart' />
            </Col>
            {/* <Ro>w */}
            <Col className='d-flex align-items-center justify-content-between my-3'>
              <div>
                <h3 className='fs-5 m-0'>MaterialPro</h3>
                <p className='mb-2'>$23,568</p>
              </div>
              <div className='bg-info px-2 rounded'>+55</div>
            </Col>
            <Col className='d-flex align-items-center justify-content-between my-3'>
              <div>
                <h3 className='fs-5 m-0'>MaterialPro</h3>
                <p className='mb-2'>$23,568</p>
              </div>
              <div className='bg-info px-2 rounded'>+35</div>
            </Col>
            <Col className='d-flex align-items-center justify-content-between my-3'>
              <div>
                <h3 className='fs-5 m-0'>MaterialPro</h3>
                <p className='mb-2'>$23,568</p>
              </div>
              <div className='bg-info px-2 rounded'>+15</div>
            </Col>
            {/* </Ro> */}
          </Card>
        </Col>

        <Col span={16} className=' '>
          <Card className='mb-4 ps-3 box-shadow'>
            <div className='d-flex justify-content-between align-items-center'>
              <Col span={8} >
                <p className='fw-medium fs-5 my-0'>Top Projects</p>
                <p className=''>Best Products</p>
              </Col>
              <div className='col-2'>
                <Button>march 2023 <ICDownOutlined /></Button>
              </div>
            </div>
            <Col span={24} className='row border-bottom pb-3'>
              <Col span={9} className='fw-bold'>Assigned</Col>
              <Col span={5} className='fw-bold'>Project</Col>
              <Col span={5} className='fw-bold'>Priority</Col>
              <Col span={5} className='fw-bold'>Budget</Col>
            </Col>

            {array2.map((x) => {
              return (
                <Col span={24} className='row border-bottom align-items-center' key={x}>
                  <Col span={9} className='mt-2'>
                    <p className='mb-0 fw-bolder'>Sunil Joshi</p>
                    <p className=''>Web Designer</p>
                  </Col>
                  <Col span={5} className=''>Elite Admin</Col>
                  <Col span={5} className=''>
                    <div className='bg-info px-2 rounded w-50 text-center'>Low</div>
                  </Col>
                  <Col span={5} className=''>$3.9k</Col>
                </Col>
              )
            })}

          </Card>
        </Col>
      </div>

    </HomeLayout>
  )
}

export default Modern

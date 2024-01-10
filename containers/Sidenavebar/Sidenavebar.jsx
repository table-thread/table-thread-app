import React from 'react';
import Link from 'next/link';
import {
  PoweroffOutlined,
  BorderInnerOutlined,
  BarChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Menu, theme, Button } from 'antd';
import { logo, logo2 } from '@/utils/image';



const Sidenavebar = (props) => {

  const style = {
    fontSize: '18px',
    borderRadius: "50px",
    width: 54,
    height: 54,
  }


  return (
    <>
      <div className="p-4 ps-3">
        <img src={props.toogleSideBar ? logo2 : logo} alt="logo" />
      </div>
      <Menu className='border border-0 ms-1'>

        <Menu.Item>
          <Link className='d-flex align-items-center' href='/modern'>
            <BarChartOutlined />
            <span className='fw-medium'>Modern</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/login'>
            <BarChartOutlined />
            <span className='fw-medium'>Login</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/signIn'>
            <BarChartOutlined />
            <span className='fw-medium'>SignIn</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/signUp'>
            <BarChartOutlined />
            <span className='fw-medium'>sign Up</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/'>
            <BorderInnerOutlined />
            <span className='fw-medium'>Account Setting</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/'>
            <BarChartOutlined />
            <span className='fw-medium'>Error</span>
          </Link>
        </Menu.Item>

      </Menu>
      <div className="d-flex align-items-center p-4 ">
        <PoweroffOutlined className='fs-5 ms-1' />
        <p className={`fs-4 m-0 fw-semibold  ${props.toogleSideBar ? 'd-none' : 'ps-2'}`}>Logout</p>
      </div>
    </>
  )
}

export default Sidenavebar

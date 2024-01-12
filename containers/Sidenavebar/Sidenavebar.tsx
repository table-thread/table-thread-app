import React from 'react';
import Link from 'next/link';
import {
  BorderInnerOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { Menu, theme, Button } from 'antd';
import { logo, logo2 } from '@/utils/image';
import { ICTiHome, ICSiAirtable, ICFaCartPlus, ICHiUsers, ICGiNotebook, ICIoMdSettings, ICFaKeyboard, ICIoIosLogOutd } from '@/utils/icons';


const Sidenavebar = (props: any) => {

  const { toogleSideBar } = props

  const navItems = [
    {
      navLink: '/home',
      icon: <ICTiHome />,
      lable: 'Home'
    },
    {
      navLink: '/tables',
      icon: <ICSiAirtable />,
      lable: 'Tables'
    },
    {
      navLink: '/product',
      icon: <ICFaCartPlus />,
      lable: 'Product'
    },
    {
      navLink: '/product_categoties',
      icon: <ICHiUsers />,
      lable: 'Product Categories'
    },
    {
      navLink: '/orders',
      icon: <ICGiNotebook />,
      lable: 'Orders'
    },
    {
      navLink: '/setting',
      icon: <ICIoMdSettings />,
      lable: 'Setting'
    },
    {
      navLink: '/subscription',
      icon: <ICFaKeyboard />,
      lable: 'Subscriptions'
    },
  ];

  // const style = {
  //   fontSize: '18px',
  //   borderRadius: "50px",
  //   width: 54,
  //   height: 54,
  // }


  return (
    <>
      <div className="p-4 ps-3 d-flex align-items-center">
        <img src={logo2} alt="logo" />
        <span className={`fs-3 ${toogleSideBar ? 'd-none' : ''}`}>Table thread</span>
      </div>
      <Menu className='border border-0 ms-1'>
        {navItems.map((item) => {
          return (
            <>
              <Menu.Item>
                <Link className='d-flex align-items-center gap-2' href={item.navLink}>
                  <span>{item.icon}</span>
                  <span className={`fw-medium ${toogleSideBar ? 'd-none' : ''}`}>{item.lable}</span>
                </Link>
              </Menu.Item>
            </>
          )
        })
        }

        {/* <Menu.Item>
          <Link className='d-flex align-items-center' href='/modern'>
            <ICTiHome />
            <span className='fw-medium'>Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/login'>
            <ICSiAirtable />
            <span className='fw-medium'>Tables</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/signIn'>
            <ICFaCartPlus />
            <span className='fw-medium'>Product</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/signUp'>
            <ICHiUsers />
            <span className='fw-medium'>Product Categories</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/'>
            <ICGiNotebook />
            <span className='fw-medium'>Orders</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/'>
            <ICIoMdSettings />
            <span className='fw-medium'>Setting</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link className='d-flex align-items-center' href='/'>
            <ICFaKeyboard />
            <span className='fw-medium'>Subscriptions</span>
          </Link>
        </Menu.Item>
        */}
        <Menu.Item>
          <Link className='d-flex align-items-center gap-2' href='/'>
            <ICIoIosLogOutd />
            <span className={`fw-medium ${toogleSideBar ? 'd-none':''} `}>Logout</span>
          </Link>
        </Menu.Item>

      </Menu>
      {/* <div className="d-flex align-items-center p-4 ">
        <PoweroffOutlined className='fs-5 ms-1' />
        <p className={`fs-4 m-0 fw-semibold  ${toogleSideBar ? 'd-none' : 'ps-2'}`}>Logout</p>
      </div> */}
    </>
  )
}

export default Sidenavebar

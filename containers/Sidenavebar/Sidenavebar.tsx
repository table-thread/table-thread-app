import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';
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
        <Menu.Item>
          <Link className='d-flex align-items-center gap-2' href='/'>
            <ICIoIosLogOutd />
            <span className={`fw-medium ${toogleSideBar ? 'd-none' : ''} `}>Logout</span>
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Sidenavebar

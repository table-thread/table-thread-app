import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';

import Navhead from '@/containers/Header/Header';
import Sidenavebar from '@/containers/Sidenavebar/Sidenavebar';
import Modern from '../../src/pages/home';


const { Sider, Content } = Layout;

const FUllLayout = (props: any) => {

  const { collapsOnSD, setCollapsOnSD, children } = props;

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    // console.log(collapsOnSD);
  }, [collapsOnSD])


  return (

    <>
      <div className='bg-white'>
        <Sider collapsed={collapsed} className={`bg-white  ${collapsed ? 'toogleSideBar' : 'ant-layout-sider'} ${collapsOnSD ? '' : 'ant-layout-sider-sm'}`}>
          <div className={`border-end h-100 ${collapsed ? 'sider-w-collapsed' : ''}`}>
            <Sidenavebar className="col-3" toogleSideBar={collapsed} setCollapsOnSD={setCollapsOnSD} collapsOnSD={collapsOnSD} hideSideBar={setCollapsed} />
          </div>
        </Sider>
      </div>

      <Layout className='bg-white' style={{ zIndex: 11 }} >
        <Navhead hideSideBar={setCollapsed} showSideBar={collapsed} collapsOnSD={collapsOnSD} setCollapsOnSD={setCollapsOnSD} />
        <Content
          className='p-4 m-4 mt-5 pt-5'>
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default FUllLayout;

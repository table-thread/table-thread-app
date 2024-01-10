'use client'
import React, { useState, useEffect, Children } from 'react';
import { Layout } from 'antd';

// import FUllLayout from '@/containers/Layout/Layout';
import FUllLayout from '../Layout/Layout';

const HomeLayout = (props: any) => {

  const { children } = props
  const [collapsOnSD, setCollapsOnSD] = useState(false);



  return (
    <>
      <div className={`${collapsOnSD ? 'show-sider' : ''}`} onClick={() => setCollapsOnSD(!collapsOnSD)}>
      </div>
      <Layout>
        <FUllLayout collapsOnSD={collapsOnSD} setCollapsOnSD={setCollapsOnSD}>
          {children}
        </FUllLayout>
      </Layout>

    </>
  );
}

export default HomeLayout;
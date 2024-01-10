/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { useRouter } from 'next/router';

import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import Link from 'next/link';

const SimpleDropdown = (props: any) => {

  const router = useRouter();

  const { title ,userData} = props;

  const logoutProcess = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push('/login');
  }

  // const touserprof = () => {
  //   router.push('/user-profile');
  // }

  // const toUsers = () => {
  //   router.push('/users');
  // }

  // const toCompanies = () => {
  //   router.push('/company-list');
  // }


  // const toSubscription = () => {
  //   router.push('/tally-subscription');
  // }


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link href={"/user-profile"}>Profile </Link>
      )
    },          
    {
      key: '2',
      label: (
        <Link href={"/company-list"}>Companies </Link>
      //   <span onClick={toCompanies} >Companies </span>
      )
    },
    {
      key: '3',
      label: (
        <Link href={"/tally-subscription"}>Subscription </Link>
        // <span onClick={toSubscription} >Subscription </span>
      )
    }
  ]


  if(userData && userData?.isClient){
    items.push(
      
      {
        key: '4',
        label: (
          <Link href={"/users"}>Users </Link>
            // <span onClick={toUsers} >Users </span>
        )
      },
      {
        key: '5',
        label: (
          // <Link href={"/user-profile"}>Profile </Link>
          <span onClick={logoutProcess} >Logout </span>
        )
      }
    )
  }else{
    items.push(
      {
        key: '4',
        label: (
          // <Link href={"/user-profile"}>Profile </Link>
          <span onClick={logoutProcess} >Logout </span>
        )
      }
    )
  }

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space> {title} <DownOutlined rev="" /> </Space>
      </a>
    </Dropdown>
  );

};

export default SimpleDropdown;
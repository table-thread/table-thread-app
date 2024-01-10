import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

import { ICMoreOutlined } from '@/utils/icons';

import IconBox from '@/component/iconbox/iconbox';

const DropdownWithAction = (props: any) => {

  const {
    title,
    onClickDelete,
    onClickShare,
    onClickDownload,
    onClickEdit,
    targetItem,
    setReFetchAction,
    isAlert
  } = props

  const menuOptions = [
    {
      label: 'Delete',
      key: '1',
      disabled: targetItem?.tallySync,
    },
    {
      label: 'Share',
      key: '2',
    },
    {
      label: 'Download',
      key: '3',
    },
    {
      label: 'Edit',
      key: '4',
      disabled: targetItem?.tallySync,
    }
  ];

  const handleMenuClick: MenuProps['onClick'] = (menuItemClicked: any) => {
    if (menuItemClicked.key == "1") {
      onClickDelete(targetItem);
    } else if (menuItemClicked.key == "2") {
      onClickShare(targetItem);
    } else if (menuItemClicked.key == "3") {
      onClickDownload(targetItem);
    } else {
      onClickEdit(targetItem);
    }
  };

  const menuProps = { items: menuOptions, onClick: handleMenuClick };

  return (
    <Dropdown menu={menuProps}>
      <button className='border-0 bg-transparent' onClick={(e) => e.preventDefault()}>
        {title}
        <IconBox
          type="text"
          icon={<ICMoreOutlined />}
          color=""
          loading={false}
        />
      </button>
    </Dropdown>
  );
};

export default DropdownWithAction;
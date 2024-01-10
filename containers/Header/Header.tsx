import React from 'react';
import { Layout, Button } from 'antd';
import { ICMenuFoldOutlined, ICMenuUnfoldOutlined, ICGithubOutlined, ICDownOutlined, ICZoomInOutlined, ICTeamOutlined, ICBellOutlined, ICUnorderedListOutlined, } from '@/utils/icons'

const { Header } = Layout;



const TAG = "Header: ";
const Navhead = (props: any) => {

  const { hideSideBar, showSideBar, collapsOnSD, setCollapsOnSD } = props;
  const style = {
    fontSize: '18px',
    borderRadius: "50px",
    width: 54,
    height: 54,
  }

  return (
    <>
      <Header className='d-flex align-items-center justify-content-between bg-white px-4 position-fixed' style={{ width: '-webkit-fill-available', zIndex: 1 }}>
        <div className='d-flex align-items-center justify-content-between'>
          <Button
            type="text"
            icon={<ICMenuFoldOutlined />}
            onClick={() => props.hideSideBar(!showSideBar)}
            style={style}
            className='lg-sidebar-button'
          />
          <Button
            type="text"
            icon={<ICUnorderedListOutlined />}
            onClick={() => {
              setCollapsOnSD(!collapsOnSD);
              hideSideBar(false)
            }}
            style={style}
            className='sm-sidebar-button'
          />
          <Button type="text" icon={<ICZoomInOutlined />} style={style} />
          <Button type="text" className='lg-sidebar-button'>Apps <ICDownOutlined /></Button>
          <Button type="text" className='lg-sidebar-button'>Chat</Button>
          <Button type="text" className='lg-sidebar-button'>Calender</Button>
          <Button type="text" className='lg-sidebar-button'>Email</Button>
        </div>
        <div>
          <Button type="text" icon={<ICGithubOutlined />} style={style} />
          <Button type="text" icon={<ICZoomInOutlined />} style={style} />
          <Button type="text" icon={<ICBellOutlined />} style={style} />
          <Button type="text" icon={<ICTeamOutlined />} style={style} />
        </div>
        {/* </div> */}
      </Header>

    </>
  );
}

export default Navhead;
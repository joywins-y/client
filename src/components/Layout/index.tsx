import '@/index.css';
import React from 'react';
import '@/services/store-services';
import { Layout, Menu } from 'antd';
import { Keys, meuns } from './datas';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

const { Sider, Content, Header } = Layout;

const _Layout: React.FC<{
  theme: 'dark' | 'light';
  switch: (key: Keys) => void;
  children: React.ReactNode | React.ReactElement;
}> = (props) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [selectedKeys, setSelectedKeys] = React.useState<Keys[]>(['仓库']);
  const items: ItemType[] = meuns.map((key) => ({
    key,
    title: key,
    label: key,
    onClick: () => {
      setSelectedKeys([key]);
      props.switch(key);
    },
  }));
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <Header></Header> */}
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          theme={props.theme}
          collapsible={true}
          collapsed={collapsed}
          onCollapse={() => {
            setCollapsed(!collapsed);
          }}
        >
          <Menu
            theme={props.theme}
            defaultSelectedKeys={selectedKeys}
            items={items}
          />
        </Sider>
        <Content style={{ margin: 10, overflow: 'scroll' }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default _Layout;

import React from 'react';
import _Layout from './components/Layout';
import StoreList from './components/List';
import { Keys } from './components/Layout/datas';
import useFetchData from './components/common/useFetchData';
import { popStore, pushStore, store } from './components/List/datas';
import StoreForm from './components/Form';
import { storeServices } from './services/store-services';

const App: React.FC = () => {
  const [theme] = React.useState<'dark' | 'light'>('dark');

  const onchange = () => {
    // setStoreListState(defaultState);
  };

  const {
    data,
    loading,
    pagination,
    columns,
    setColumns,
    setData,
    title,
    setTitle,
  } = useFetchData('store');

  const setColumn = (key: Keys) => {
    switch (key) {
      case '仓库':
        setColumns(store);
        const store1 = storeServices.get('store');
        setData(store1);
        break;
      case '入货':
        setColumns(pushStore);
        const store2 = storeServices.get('push_store');
        setData(store2);
        break;
      case '出货':
        setColumns(popStore);
        const store3 = storeServices.get('pop_store');
        setData(store3);
        break;
      default:
        break;
    }
  };

  return (
    <_Layout
      switch={(key) => {
        setTitle(key);
        setColumn(key);
      }}
      theme={theme}
    >
      <StoreForm
        // @ts-ignore
        setData={setData}
        data={data}
        columns={columns}
        title={title}
      />
      <StoreList
        data={data}
        title={title}
        columns={columns}
        loading={loading}
        onchange={onchange}
      />
    </_Layout>
  );
};

export default App;

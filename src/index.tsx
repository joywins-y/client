import React from 'react'
import _Layout from './components/Layout'
import { storeServices } from './services/store-services'
import StoreList, { StoreListAppProps } from './components/List'

const App: React.FC = () => {
  const defaultState: StoreListAppProps = {
    data: [],
    columns: [],
    loading: true,
    title: '仓库',
  }
  const [storeListState, setStoreListState] =
    React.useState<StoreListAppProps>(defaultState)
  const [theme] = React.useState<'dark' | 'light'>('dark')
  const effectCallback = () => {
    const datas = storeServices.get('store')
    setStoreListState({
      ...storeListState,
      data: datas,
      title: '仓库',
      loading: false,
    })
  }
  const onchange = () => {
    setStoreListState(defaultState)
  }
  React.useEffect(() => effectCallback(), [])
  return (
    <_Layout
      switch={(key) => {
        setStoreListState({ ...storeListState,title:key })
      }}
      theme={theme}
    >
      <StoreList
        data={storeListState.data}
        title={storeListState.title}
        columns={storeListState.columns}
        loading={storeListState.loading}
        onchange={onchange}
      />
    </_Layout>
  )
}

export default App

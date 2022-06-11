import React from 'react'
import { StoreProduction } from '@/interfaces/production'
import { LOCA_KEY, storeServices } from '@/services/store-services'
import { PaginationConfig } from 'antd/lib/pagination'
import { Keys } from '../Layout/datas'
import { store } from '../List/datas'

const useFetchData = (key: LOCA_KEY) => {
  const [data, setData] = React.useState<StoreProduction[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [pagination, setPagination] = React.useState<PaginationConfig>()
  const [columns, setColumns] = React.useState<any>([])
  const [title, setTitle] = React.useState<Keys>("仓库")

  React.useEffect(() => {
    const result = storeServices.get(key)
    if (result) {
      setData(result)
      setLoading(false)
      setPagination({current: 1,pageSize: 10,total: data.length})
    }
    setColumns(store);
  }, [])
  return {
    data,
    loading,
    pagination,
    columns,
    setColumns,
    setData,
    title,
    setTitle,
  }
}

export default useFetchData
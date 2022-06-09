import React from 'react'
import { StoreProduction } from '@/interfaces/production'
import { LOCA_KEY, storeServices } from '@/services/store-services'
import { PaginationConfig } from 'antd/lib/pagination'

const useFetchData = (key: LOCA_KEY) => {
  const [data, setData] = React.useState<StoreProduction[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [pagination, setPagination] = React.useState<PaginationConfig>()
  React.useEffect(() => {
    const result = storeServices.get(key)
    if (result) {
      setData(result)
      setLoading(false)
      setPagination({current: 1,pageSize: 10,total: data.length})
    }
  }, [])
  return {
    data,
    loading,
    pagination
  }
}

export default useFetchData
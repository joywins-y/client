import { Table, Tag } from 'antd'
import { Keys } from '../Layout/datas'
import { FunctionComponent } from 'react'
import { ColumnsType } from 'antd/lib/table'
import { StoreProduction } from '@/interfaces/production'

export interface StoreListAppProps {
  data: StoreProduction[]
  columns: ColumnsType<StoreProduction>
  loading: boolean
  onchange?: () => void
  title: Keys
}

const StoreList: FunctionComponent<StoreListAppProps> = (props) => {
  const { data, columns, loading, onchange, } = props
  return (
    <Table
      title={() => <Tag children={props.title} />}
      dataSource={data}
      columns={columns}
      loading={loading}
      onChange={onchange}
    />
  )
}

export default StoreList

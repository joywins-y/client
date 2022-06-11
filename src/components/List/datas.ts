import { StoreProduction } from '@/interfaces/production';
import { ColumnsType } from 'antd/lib/table';

export const store: ColumnsType<StoreProduction[]> = [
  {
    title: '序号',
    dataIndex: 'id',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '型号',
    dataIndex: 'series',
  },
  {
    title: '颜色',
    dataIndex: 'color',
  },
  {
    title: '尺寸',
    dataIndex: 'size',
  },
  {
    title: '数量',
    dataIndex: 'number',
  },
  {
    title: '仓库号',
    dataIndex: 'store',
  },
];

export const pushStore: ColumnsType<StoreProduction[]> = [
  {
    title: '入货时间',
    dataIndex: 'timer',
  },
  {
    title: '入货数量',
    dataIndex: 'number',
  },
  {
    title: '目的地到达时间',
    dataIndex: 'dist',
  },
  {
    title: '入货产品',
    dataIndex: 'production',
    render: (name, record) => {
      return 'name.name';
    },
  },
  {
    title: '入货备注',
    dataIndex: 'description',
  },
];

export const popStore: ColumnsType<StoreProduction[]> = [
  {
    title: '出货时间',
    dataIndex: 'timer',
  },
  {
    title: '出货数量',
    dataIndex: 'number',
  },
  {
    title: '目的地到达时间',
    dataIndex: 'dist',
  },
  {
    title: '出货产品',
    dataIndex: 'production',
    render: (_, record) => 'record.name',
  },
  {
    title: '出货备注',
    dataIndex: 'description',
  },
];

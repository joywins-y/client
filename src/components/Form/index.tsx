import React, { FunctionComponent } from 'react';
import { StoreProduction } from '@/interfaces/production';
import { storeServices } from '@/services/store-services';
import { Button, Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { ColumnsType } from 'antd/lib/table';
import { Keys } from '../Layout/datas';

let id = 1;

export interface StoreListAppProps {
  data: StoreProduction[];
  columns: ColumnsType<StoreProduction>;
  loading: boolean;
  onchange?: () => void;
  title: Keys;
}

const layouts = { labelCol: { span: 6 }, wrapperCol: { span: 16 } };

const StoreForm: FunctionComponent<StoreListAppProps> = (props) => {
// @ts-ignore
  const { columns = [], title, setData } = props;
  const [form] = useForm();

  const handleClick = () => {
    form.validateFields().then((values) => {
      values.id = id++;
      switch (title) {
        case '仓库':
          storeServices.save('store', values);
          const store1 = storeServices.get('store');
          setData(store1);
          break;
        case '入货':
          storeServices.save('push_store', values);
          const store2 = storeServices.get('push_store');
          setData(store2);
          break;
        case '出货':
          storeServices.save('pop_store', values);
          const store3 = storeServices.get('pop_store');
          setData(store3);
          break;
        default:
          break;
      }
      form.resetFields(); // 清空表单数据
    });
  };

  return (
    <Form
      form={form}
      className="form_container"
      {...layouts}
      initialValues={{ size: 1.5, color: 'blue' }}
    >
      <Row gutter={8}>
        {columns?.map((item: any, index: number) => (
          <Col key={index} span={12}>
            <Form.Item
              label={item.title}
              name={item.dataIndex}
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        ))}
      </Row>
      <Form.Item className="btns_row">
        <Button type="primary" onClick={handleClick} className="submit_btn">
          提交
        </Button>
        <Button onClick={() => form.resetFields()}>重置</Button>
      </Form.Item>
    </Form>
  );
};

export default StoreForm;

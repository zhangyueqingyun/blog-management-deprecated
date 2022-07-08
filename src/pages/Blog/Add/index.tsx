import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormText,
  ProFormTextArea,
  ProFormSelect,
  ProFormUploadButton
} from '@ant-design/pro-components';
import { Button, message } from 'antd';
import { addBlog } from '@/services/blog'
import { useOptions } from '../hooks'

export default () => {
  const { categoryValueEnum, signValueEnum } = useOptions()

  const onFinish = async function(blog: any) {
    await addBlog({...blog, datetime: Date.now()})
    message.success('新建成功')
    return true
  }

  return (
    <ModalForm<any>
      title="新建博客"
      trigger={
        <Button type="primary">
          <PlusOutlined />
          新建博客
        </Button>
      }
      autoFocusFirstInput
      modalProps={
        {width: 500}
      }
      onFinish={onFinish}
    >
      <ProFormText 
        name="title" 
        label="标题"
      />
      <ProFormTextArea 
        name="description" 
        label="描述" 
      />
      <ProFormSelect 
        name="catogoryId" 
        label="类别"
        valueEnum={categoryValueEnum}  
      />
      <ProFormUploadButton
        name="ossPath"
        label="博客正文"
        max={1}
        fieldProps={{
          name: 'file',
          customRequest(){
            return true
          }
        }}
        accept=".md"
      />
      <ProFormSelect
        mode="multiple"
        name="signIds" 
        label="标签"
        valueEnum={signValueEnum}
      />
    </ModalForm>
  );
};
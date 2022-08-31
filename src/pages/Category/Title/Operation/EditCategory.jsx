import {useState} from 'react'
import { EditOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormText,
  ProFormTextArea,
  ProForm
} from '@ant-design/pro-components';
import AliyunOssUpload from '@/components/AliyunOssUpload'
import { Button, message } from 'antd';

export default () => {
  const [ ossPath, setOssPath ] = useState('')
  const onFinish = async function(blog) {
    // await addBlog({...blog,signIds: blog.signIds.join(','), ossPath, datetime: Date.now()})
    message.success('新建成功')
    return true
  }

  const onUploadChange = function (file) {
    setOssPath(file?.name)
  }

  return (
    <ModalForm
      title="编辑分类"
      trigger={
        <EditOutlined className="edit" />
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
      <ProForm.Item
         name="ossPath"
         label="博客正文"
      >
        <AliyunOssUpload 
          onChange={onUploadChange}
        />
      </ProForm.Item>
    </ModalForm>
  );
};
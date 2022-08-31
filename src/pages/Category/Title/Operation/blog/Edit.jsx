import { useContext } from 'react'
import { EditOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormText,
  ProFormTextArea
} from '@ant-design/pro-components';
import { message } from 'antd';

import { CategoryContext, TitleContext } from '@/pages/Category/context';

import { editBlog } from '@/services/category';

export default () => {
  const {category, parentNode} = useContext(TitleContext);
  const {refresh} = useContext(CategoryContext);

  const onFinish = async function(blog) {
    await editBlog({...blog, id: category.id})
    message.success('新建成功')
    refresh(parentNode);
    return true
  }

  return (
    <ModalForm
      title="编辑博客"
      trigger={
        <EditOutlined className="edit" />
      }
      initialValues={{title: category?.name, description: category?.description}}
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
    </ModalForm>
  );
};
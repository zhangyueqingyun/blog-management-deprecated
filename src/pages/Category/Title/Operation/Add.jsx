import { useState, useContext } from 'react'
import {
  ModalForm,
  ProForm,
  ProFormText,
  ProFormTextArea,
  ProFormRadio
} from '@ant-design/pro-components';
import { message } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import AliyunOssUpload from '@/components/AliyunOssUpload'
import { CategoryContext, TitleContext } from '@/pages/Category/context';

import { addCategory, addBlog } from '@/services/category';

const CATEGORY = 0;
const BLOG = 1;

export default () => {
  const [ ossPath, setOssPath ] = useState(CATEGORY);
  const [ type , setType ] = useState(0);
  const { category } = useContext(TitleContext);
  const { refresh } = useContext(CategoryContext);
    
  const onFinish = async function(data) {
    if(type === CATEGORY) {
      await addCategory({...data, parentId: category?.id || -1});
    } else if (type === BLOG) {
      await addBlog({...data, ossPath, categoryId: category?.id || -1});
    }
    message.success('新增成功');
    refresh({key: 'all', id: -1, ...category});
    return true
  }

  const onUploadChange = function (file) {
    setOssPath(file?.name);
  }

  return (
    <ModalForm
      title="新增"
      trigger={
        <PlusCircleOutlined className="add" />
        
      }
      autoFocusFirstInput
      modalProps={
        {width: 500}
      }
      onFinish={onFinish}
    >
       <ProFormRadio.Group
        label="类型"
        fieldProps={{
          value: type,
          onChange: (e) => setType(e.target.value),
        }}
        colProps={{
          span: 20,
        }}
        options={[{label:'分类', value: CATEGORY}, {label:'博客', value: BLOG}]}
      />

      {type === CATEGORY && (<ProFormText 
        name="name" 
        label="分类名称"
      />)}
      {type === BLOG && (<>
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
      </>)}
    </ModalForm>
  );
};
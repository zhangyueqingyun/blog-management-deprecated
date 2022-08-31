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
import { CategoryContext, TitleContext } from '../../context';

import { addCategory } from '@/services/category';

const CATEGORY = 0;
const BLOG = 1;

export default () => {
  const [ ossPath, setOssPath ] = useState(CATEGORY);
  const [ type , setType ] = useState(0);
  const {category} = useContext(TitleContext);
  const {refresh} = useContext(CategoryContext);
    
  const onFinish = async function(data) {
    console.log('data', data)
    await addCategory({...data, parentId: category.id})
    // await addBlog({...blog, ossPath, datetime: Date.now()})
    message.success('新建成功');
    refresh(category);
    return true
  }

  const onUploadChange = function (file) {
    setOssPath(file?.name)
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
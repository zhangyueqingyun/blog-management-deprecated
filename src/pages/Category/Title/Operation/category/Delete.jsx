import { useContext } from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { ModalForm } from '@ant-design/pro-components';
import { message } from 'antd';

import { deleteCategory } from '@/services/category';

import { CategoryContext, TitleContext } from '@/pages/Category/context';

export default () => {
  const {category, parentNode} = useContext(TitleContext);
  const {refresh} = useContext(CategoryContext);
    
  const onFinish = async function() {
    await deleteCategory(category.id);
    message.success('删除成功');
    refresh(parentNode);
    return true
  }

  return (
    <ModalForm
      title="删除"
      trigger={
        <DeleteOutlined className="delete" />
      }
      autoFocusFirstInput
      modalProps={{
        width: 500,
        keyboard: false,
        maskClosable: false
      }}
      onFinish={onFinish}
    >
     确定删除该分类“{category.name}”及其下所有子项目吗？
    </ModalForm>
  );
};
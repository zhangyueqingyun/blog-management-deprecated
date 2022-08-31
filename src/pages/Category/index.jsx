import React, { useState, useEffect } from 'react';

import { PageContainer } from '@ant-design/pro-components';
import { Tree } from 'antd';
import { FolderFilled, FileOutlined } from '@ant-design/icons';

import { getCategories } from '@/services/category';

function CategoryPage () {
  const [treeData, setTreeData] = useState();

  const fetchTreeData = async (node) => {
    if(node?.children) return;

    const treeData = await getTreeData(node?.id ?? -1);
    setTreeData(prevTreeData => (node ? 
      updateTreeData(prevTreeData, node.key, treeData) :
      treeData
    ));
  }

  useEffect(function () {
    fetchTreeData();
  }, [])

  return (<PageContainer ghost title="类别">
    <Tree 
      showIcon
      treeData={treeData} 
      loadData={fetchTreeData} 
    />
  </PageContainer>);
}

const updateTreeData = (list, key, children) =>  list.map(node => {
    if(node.key === key) {
      node.children = children;
      node.isLeaf = !children?.length;
    } 
      
    if(node.children) 
      node.children = updateTreeData(node.children, key, children);
    
    return node;
})

async function getTreeData(parentId) {
  const categories = await getCategories(parentId);
  return categories.map(category => ({
      ...category,
      title: category.name,
      key:`${category.type}-${category.id}`,
      isLeaf: category.type === 'blog',
      icon: category.type === 'blog' ? <FileOutlined /> : <FolderFilled />
  }))
}

export default CategoryPage;

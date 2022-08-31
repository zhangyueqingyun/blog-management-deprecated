import React, { useState, useEffect } from 'react';

import { PageContainer } from '@ant-design/pro-components';
import { Tree } from 'antd';
import { FolderFilled, FileOutlined, FolderOpenFilled, PlusCircleOutlined } from '@ant-design/icons';

import { getCategories } from '@/services/category';
import Title from './Title';
import {CategoryContext, TitleContext} from './context';

function CategoryPage () {
  const [treeData, setTreeData] = useState();

  function refresh(node) {
    fetchTreeData(node, true);
  }

  async function fetchTreeData (node, isRefresh) {
    if(node?.children && !isRefresh) return;

    const treeData = await getTreeData(node);
    
    setTreeData(prevTreeData => (node ? 
      updateTreeData(prevTreeData, node.key, treeData) :
      treeData
    ));
  }

  function onExpand (keys, {expanded}) {
    setTreeData(prevTreeData => expandNode(prevTreeData, keys, expanded))
  }

  useEffect(function () {
    fetchTreeData();
  }, [])

  return (<PageContainer ghost title="类别">
    <CategoryContext.Provider value={{refresh}}>
      <Tree 
        showIcon
        treeData={treeData} 
        loadData={fetchTreeData} 
        onExpand={onExpand}
        selectable={false}
      />
    </CategoryContext.Provider>
  </PageContainer>);
}

const expandNode = (list, keys, expanded) =>  list.map(node => {
  if(keys.find(key => key === node.key)) {
    node.icon = <FolderOpenFilled />;
  } else if (node.type !== 'blog') {
    node.icon = <FolderFilled />;
  }

  if(node.children) 
    node.children = expandNode(node.children, keys, expanded);

  return node;
})

const updateTreeData = (list, key, children) =>  list.map(node => {
    if(node.key === key) {
      node.children = children;
      // node.isLeaf = !children?.length;
    } 
      
    if(node.children) 
      node.children = updateTreeData(node.children, key, children);
    
    return node;
})

async function getTreeData(parentNode) {
  const categories = await getCategories(parentNode?.id ?? -1);
  return categories.map(category => {
    const node =  {
      ...category,
      key:`${category.type}-${category.id}`,
      isLeaf: category.type === 'blog',
      icon: category.type === 'blog' ? <FileOutlined /> : <FolderFilled />,
    };
    node.title = (<TitleContext.Provider value={{category: node, parentNode}}>
      <Title />
    </TitleContext.Provider>);
    return node; 
  })
}

export default CategoryPage;

import {useCallback} from 'react'
import {PageContainer, ProTable} from '@ant-design/pro-components';
import {Button} from 'antd'
import {columns} from './columns'
import {getBlogs} from '@/services/blog'

const BlogPage: React.FC = () => {
    const request = useCallback(async function(){
        return getBlogs()
    }, []) 
  return (
    <PageContainer ghost title="博客">
        <ProTable<any>
            columns={columns}
            request={request}
            rowKey="id"
            search={false}
            headerTitle="博客列表"
            toolbar={{settings: [<Button type='primary' size="middle">新增</Button>]}}
        />
    </PageContainer>
  );
};

export default BlogPage;

import {useState, useCallback, useEffect} from 'react'
import {PageContainer, ProTable} from '@ant-design/pro-components';
import Add from './Add'
import {columns} from './columns'
import {getBlogs} from '@/services/blog'
import {getCategories} from '@/services/category'
import {getSigns} from '@/services/sign'
import {OptionContext} from './context'

const BlogPage: React.FC = () => {
    const options = useFetchOptions()

    const request = useCallback(async function(){
        return getBlogs()
    }, []) 

    return (
        <OptionContext.Provider value={options}>            
            <PageContainer ghost title="博客">
                <ProTable<any>
                    columns={columns} 
                    request={request}
                    rowKey="id"
                    search={false}
                    headerTitle="博客列表"
                    toolbar={{settings: [<Add />]}}
                />
            </PageContainer>
        </OptionContext.Provider>
    );
};

function useFetchOptions() {
    const [options, setOptions] = useState({})
    
    const fetchOptions = useCallback(async function() {
        const [categories, signs] = await Promise.all([getCategories(), getSigns()])
        setOptions({
            ...options,
            categories,
            signs
        })
    }, [])

    useEffect(function() {
        fetchOptions()
        return function() {}
    }, [])

    return options
}

export default BlogPage;

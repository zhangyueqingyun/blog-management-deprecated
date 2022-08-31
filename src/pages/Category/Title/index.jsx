import { useContext } from 'react'
import { Add, Delete, EditCategory, EditBlog } from './Operation';

import useMouseOver from './hooks/useMouseOver';
import {TitleContext} from '../context';

import './index.less';

export default  function Title({title}) {
    const {isOver, enter, leave} = useMouseOver();
    const {category: {name, type}} = useContext(TitleContext);

    return (<span onMouseEnter={enter} onMouseLeave={leave}>
        <span className="title">{name || title}</span> 
        {isOver && type !== 'blog' && <Add />}
        {isOver && type === 'category' && <EditCategory />}
        {isOver && type === 'blog' && <EditBlog />}
        {isOver && type && <Delete />}
    </span>)
}
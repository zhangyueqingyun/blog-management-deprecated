import type { ProColumns } from '@ant-design/pro-components';

export const columns: ProColumns<any>[] = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '类别',
      dataIndex: 'category',
    },
    {
      title: 'oss路径',
      dataIndex: 'ossPath',
    },
    {
      title: '上传日期',
      dataIndex: 'datetime',
    },
    {
      title: '标签',
      dataIndex: 'signs',
    },
    {
      title: '操作',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: () => [
        <a key="link">编辑</a>,
        <a key="link2">删除</a>,
      ],
    },
  ];
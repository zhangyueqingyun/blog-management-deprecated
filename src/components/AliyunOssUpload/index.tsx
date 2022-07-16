import {useState} from 'react'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { Button, message, Upload } from 'antd';
import {uploadBlog} from '@/utils/oss'

interface AliyunOssUploadProps {
  onChange: (file: UploadFile) => void;
}

export default function AliyunOssUpload({onChange}: AliyunOssUploadProps) {
  const [result, setResult]: any = useState({})

  const customRequest: UploadProps['customRequest'] = async ({file}) => {
      const result = await uploadBlog(file)
      message.success('上传成功')
      setResult(result)
      onChange?.(result)
  }

  return (
    <Upload 
      name={'file'}
      showUploadList={false}
      accept={".md"}
      maxCount={1}
      customRequest={customRequest}
    >
      <Button 
        icon={<UploadOutlined />}
      >
        上传博客
      </Button>
      <br /> {result?.name}
    </Upload>
  );
};
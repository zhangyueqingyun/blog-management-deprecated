import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { login }from '@/services/login';
import styles from './index.less';

const Login = () => {
  const handleSubmit = async (user) => {
    const {access_token} = await login(user);
    sessionStorage['access_token'] = access_token;
    message.success('登陆成功');
    window.location = '/management/category';
    return
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <div className={styles.title}>
            ZBlog 管理系统
          </div>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: "用户名不能为空",
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message:"密码不能为空"
                },
              ]}
            />
        </LoginForm>
      </div>
    </div>
  );
};

export default Login;

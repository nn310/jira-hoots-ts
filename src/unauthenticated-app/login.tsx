import { FormEvent } from 'react';
import { Form ,Input ,Button} from 'antd';
import { useAuth } from 'context/auth-context';
import { LongButton } from 'unauthenticated-app';
const apiUrl = process.env.REACT_APP_API_URL;
function Login() {

  const {login,user}=useAuth()
  // 提交
  const handleSubmit=(values:{username:string,password:string})=>{                                        // as 代表的意思，给前面接口设置后面泛型
    // 调用login
    login(values)
  }
  return (
    <Form onFinish={handleSubmit}>      
        <Form.Item name={'username'} rules={[{required:true,message:'请输入用户名'}]}>
          <Input placeholder={'用户名'} type="text" id={'username'} />
        </Form.Item>  
        <Form.Item name = {'password'} rules={[{required:true,message:'请输入密码'}]}>
          <Input placeholder={'密码'} type="password" id={'password'} />
        </Form.Item>  
        <Form.Item >
          <LongButton htmlType={'submit'} type={'primary'}>登录</LongButton>
        </Form.Item>
    </Form>

    
  );
}

export default Login;

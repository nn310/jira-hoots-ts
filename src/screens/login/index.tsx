import React, { FormEvent } from 'react';

function Login() {
  const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()//阻止默认提交
    const userName=(event.currentTarget.elements[0] as HTMLFormElement).value
    const passWord=(event.currentTarget.elements[1] as HTMLFormElement).value
                                                 // as 代表的意思，给前面接口设置后面泛型
  }
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={'username'}>用户名</label>
          <input type="text" id={'username'} />
        </div>  
        <div>
          <label htmlFor={'password'}>密码</label>
          <input type="text" id={'password'} />
        </div>  
        <button type={'submit'}>登录</button>
    </form>

    
  );
}

export default Login;

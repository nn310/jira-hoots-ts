import React,{useState} from "react";
import RegisterScreen from 'unauthenticated-app/register'
import Login  from 'unauthenticated-app/login'
import { DEFAULT_ENCODING } from "crypto";
import { Card } from "antd";

export const UnauthenticatedApp = () => {
    const [isRegister,setIsRegister ] = useState (false)
    return <div style={{display:'flex',justifyContent:'center'}}>
        <Card>
            {
            isRegister ? <RegisterScreen/> :<Login/>
        }
        <button onClick={()=>setIsRegister(!isRegister)}>切换到{isRegister ? '登录':'注册'}</button>        
        </Card>

    </div>
}
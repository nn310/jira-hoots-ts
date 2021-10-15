import React,{useState} from "react";
import RegisterScreen from 'unauthenticated-app/register'
import Login  from 'unauthenticated-app/login'
import { DEFAULT_ENCODING } from "crypto";

export const UnauthenticatedApp = () => {
    const [isRegister,setIsRegister ] = useState (false)
    return <div>
        {
            isRegister ? <RegisterScreen/> :<Login/>
        }
        <button onClick={()=>setIsRegister(!isRegister)}>切换到{isRegister ? '登录':'注册'}</button>
    </div>
}
import  { useState, useEffect } from "react";
// 判断数据是否为0--0为有效数据，返回true
export const isFalsy=(value:any)=>value ===0?false :!value
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object:object) =>{
    const result ={...object}
    Object.keys(object).forEach(key=>{
      //@ts-ignore
        const value=result[key]
        if(isFalsy(value)){
           //@ts-ignore
            delete result[key]
        }
    })
    return result
}

// 组件挂载后调用
export const useMount=(callback:()=>void)=>{
    useEffect(() => {
      callback()
    }, [])
  }
  // 和去抖方法实现差不多
  export const useDebounce=(value:any,delay?:number)=>{
    const [debounceValue,setDebounceValue]=useState(value)
    useEffect(() => {
      // 创建定时器
      const timeout=setTimeout(()=>setDebounceValue(value),delay)
      // 清除定时器
      return ()=>clearTimeout(timeout)
    }, [value,delay])
    return debounceValue
  }
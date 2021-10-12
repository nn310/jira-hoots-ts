import React,{useState,useEffect} from 'react'
import {SearchPanel} from './search-panel'
import {List} from './list'
const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen=()=>{
    const [param, setParam] = useState({
        name:'',
        personId:''
    })
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    useEffect(() => {
        // 请求数据
        fetch(apiUrl+'/ projects').then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    }, [param])

    useEffect(() => {
        // 请求数据--存储用户名
        fetch(apiUrl+'users').then(async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    }, [])
    return <div>
        <SearchPanel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}
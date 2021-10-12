export const SearchPanel=({param,setParam,users, setUsers})=>{ 
    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt=>setParam({
                ...param,name:evt.target.value
            })}/>
            <select value={param.name} onChange={evt=>setParam({
                ...param,name:evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map((item,index)=>
                        <option value={item.id} key={index}>{item.name}</option>
                    )
                }
            </select>
        </div>
    </form>
}
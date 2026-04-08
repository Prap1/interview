import { useEffect } from "react";
import { fetchUsers } from "../features/userSlice";
import {useDispatch, useSelector} from "react-redux"

export default function AdminDashboard(){
    const dispatch = useDispatch()
    const {users} = useSelector((state)=>state.users);
    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch]);
    return(
        <div>
            <h2>Admin Dashboard</h2>
            {users.map((u)=>(
                <div key ={u._id}>
                    {u.name} - {u.email} ({u.role})
                </div>
            ))}
        </div>
    )
}
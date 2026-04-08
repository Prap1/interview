import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux"
import { fetchDomains, createDomain } from "../features/domainSlice";

export default function UserDashboard(){
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    const {domains} = useSelector((state)=> state.domains);
    useEffect(()=>{
        dispatch(fetchDomains())
    },[dispatch])

    const onSubmit = async(data)=>{
        await dispatch(createDomain(data));
        dispatch((fetchDomains()));
        reset();
    };

    return(
        <div>
            <h2>User Dashboard</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("domainName")} placeholder="Enter Domain"></input>
                <button type="submit">Add</button>
            </form>
            {domains.map((d)=>(
                <div key={d._id}>{d.domainName}</div>
            ))}
        </div>
    )
}
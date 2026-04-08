import { loginUser } from "../features/authSlice";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";

import {useNavigate} from "react-router-dom"

export default function Login(){
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate =useNavigate();

    const onSubmit = async(data)=>{
        const res = await dispatch(loginUser(data)).unwrap();
        if(res.user.role==="admin")
            navigate("/admin");
        else navigate("/user");
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} placeholder="Email" />
            <input {...register("password")} placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    )
}
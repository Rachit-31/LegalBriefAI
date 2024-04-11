import { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
const Signup=()=>{
	const navigate= useNavigate()
	const [data, Setdata] = useState({
		name: '',
		email:'',
		password: ''
	  });
	  
	const registerUser=async(e)=>{
		e.preventDefault();
		const {name,email,password}=data 
		try {
			const {data}=await axios.post('/register',{
				name,
				email,
				password
			})
			if(data.error){
				toast.error(data.error)
			}else{
				Setdata({})
				toast.success('Register Successful. Welcome!')
				navigate('/login')
			}
		} catch (error) {
			console.log(error)
		}
	}	

    return(
        <div  data-aos="fade-right" data-aos-delay="150"  className="registercontainer">
			<div className="form-container">    
	<p className="title">Sign Up</p>
	<form className="form" onSubmit={registerUser}>
		<div className="input-group">
			<label htmlFor="username">Username</label>

			<input type="text" name="username" id="username" placeholder="" value={data.name} onChange={(e)=>Setdata({...data,name:e.target.value})} />

		</div>

		<div className="input-group">
			<label htmlFor="email">Email</label>

			<input type="text" name="email" id="email" placeholder="" value={data.email} onChange={(e)=>Setdata({...data,email:e.target.value})} />

		</div>

		<div className="input-group">
			<label htmlFor="password">Password</label>
			<input type="password" name="password" id="password" placeholder=""  value={data.password} onChange={(e)=>Setdata({...data,password:e.target.value})} />
		</div>
		<button className="sign" type='submit'>Sign Up</button>
	</form>
</div>
		</div>
    )
}
export default Signup;
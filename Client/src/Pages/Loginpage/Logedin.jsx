import './Logedin.css'
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
const Logedin=()=>{
	const navigate=useNavigate()
	const [data, Setdata] = useState({
		name: '',
		password: ''
	  });
	  
	const loginUser=async (e)=>{
			e.preventDefault()
			const {email,password}=data
			try {
				const {data}=await axios.post('/login',{
					email,
					password
				})
				if(data.error){
					toast.error(data.error)
				}else{
					Setdata({});
					navigate('/aipage')
				}
			} catch (error) {
				
			}
	}

    return(
        <div data-aos="fade-right" data-aos-delay="150"  class="container">
			<div class="form-container">
	<p class="title">Login</p>
	<form class="form"  onSubmit={loginUser}>
	<div class="input-group">
			<label for="email">Email</label>

			<input type="text" name="email" id="email" placeholder="" value={data.email} onChange={(e)=>Setdata({...data,email:e.target.value})} />

		</div>
		
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder=""  value={data.password} onChange={(e)=>Setdata({...data,password:e.target.value})} />
		</div>

		<button class="sign" type='submit'>Login in</button>
	</form>
	<div class="social-message">
		<div class="line"></div>

		<div class="line"></div>
	</div>
	<p class="signup">Don't have an account?
		<Link to="/register" rel="noopener noreferrer">Sign up</Link>
	</p>
</div>
		</div>
    )
}
export default Logedin;
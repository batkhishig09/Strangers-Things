import React from 'react'
import { useState } from 'react'
import { registerUser } from '../../Api/api'
import { useHistory} from 'react-router-dom'
import '../Register/register.css'

function Register({setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();
  
const handleSubmit = async () => {
  const result = await registerUser(username, password);
  
  if(result.success) {
    setToken(result.data.token);
    window.localStorage.setItem('token', result.data.token);
    window.alert("You have successfully registered")
    history.push('/Profile')
    
  } else {
    window.alert("You have already created an account. Please log in!")
    history.push('/Login')
  }
}
  return (
    <div className="loginform">
 <form  onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}>
       <h1 >Register</h1>
   <label for="email">New username:</label>
        <input className="form-control" type="text" placeholder='Enter your username..' onChange={(event) => setUsername(event.target.value)}/>
        <label for="password">New password:</label>
        <input className="form-control" type="password" placeholder='Enter your password' onChange={(event) => setPassword(event.target.value)}/>
        <div className='buttoncenter'>
        <button type='submit' className='button'>Create an account</button>
        </div>
    </form>
    </div>
   
  )
}

export default Register
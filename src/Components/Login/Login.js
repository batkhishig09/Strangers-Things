import React, {useState} from 'react'
import './login.css'
import { loginUser } from '../../Api/api';
import { useHistory} from 'react-router-dom'

function Login({setToken}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

const handleSubmit = async() => {
   const result = await loginUser(username, password);
   if (result.success) {
    setToken(result.data.token);
    window.localStorage.setItem('token', result.data.token);
    history.push('/Profile')
   } else {
    console.log(result.error.message)
    window.alert("Username or Password is wrong!")
   }
}

  return (
    <div className='loginform'>
    <form onSubmit={(event) => {
     event.preventDefault();
     handleSubmit();
    }} 
    className="main">
        <h1 >Login</h1>
        <label for="email">Username:</label>
        <input className="form-control" type="text" placeholder='Enter your username..' onChange={(event) => setUsername(event.target.value)}/>
        <br></br>
        <label for="password">Password:</label>
        <input className='form-control' type="password" placeholder='*******' onChange={(event) => setPassword(event.target.value)}/>
         <br></br>
         <div className='buttoncenter'>
         <button type='submit' className='button'>Log In</button>
         <br></br>
         <a href='/register'>Don't have an account? Sign Up</a>
         </div>
        
    </form>
</div>
  )
}

export default Login
import React, {useState} from 'react'
import './login.css'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className='loginform'>
    <p className="title">Login</p>

    <form className="App">
        <label for="email">E-Mail:</label>
        <input value={email}  type="email" placeholder='youremail@gmail.com' id="email" name="email"/>
        <label for="email">E-Mail:</label>
        <input value={password} type="password" placeholder='*******' id="password" name="password"/>
         <button >Log In</button>
    </form>
</div>
  )
}

export default Login
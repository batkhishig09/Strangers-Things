import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import img from '../../Assets/main page.png'
function Home({token}) {
  return (
    <div className='header'>
      <div className='home1'>
      <h1 >It's a place to buy and sell used items!</h1>
        <p className='header-p'>
        It can be hard to discern what has value and what doesn't—not to mention that if you're in the process of spring cleaning, or sorting through a relative's belongings, even the thought of trying to sort out which items to sell can be exhausting. 
        Fortunately, in the world of luxury consignment, there are a few clear-cut guidelines to help you determine what's worth selling and what you might be better off keeping. Of course, you'll want to make sure that the items you're considering are still in good condition, with minimal to no wear and tear. In addition to that, keep these general rules in mind to help you figure out what will maintain its resale value and what you're better off keeping
        </p>
        {
          token ? (
            <>
            </>
          ) : (
            <>
            <button className='button'>
            <Link to="/login">Login</Link>  
            </button>  <br></br>
            <h3>New to Stranger's Things?</h3>
            <br></br>
            <button className='button'>
              <Link to="/register">Create an account</Link>
            </button>
            </>
          )
        }
     
      </div>
     <div className='home2'>
      <img src={img} alt='cover'/>
     </div>
    </div>
  )
}

export default Home;
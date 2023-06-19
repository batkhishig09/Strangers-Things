import React from 'react'
import './profile.css'
import { Link } from 'react-router-dom'

function Profile({user}) {
  const userID = user._id;
  const messages = user.messages
  const username = user.username
  // console.log(username);
  
  return (
    <div className='mainbody'>
     <div className='mainbody-section'>
      <h1 className='maintitle'>Welcome to Stranger's Things, {`${username}`}!</h1>
      <div className='button-center'>
      <button className='button'>
        <Link to="/createpost">Create a New Post</Link>
      </button>
      </div>
      
     <br></br>
      <h2>Incoming Messages:</h2> 
      {
        messages && messages.map(message => {
          const fromUserID = message.fromUser._id; 
         
          const {username} = message.fromUser;
          const {title} = message.post;

          if (userID !== fromUserID) {
            return (
              <div key={message._id} >
                 <p>From User: {username} </p>
                 <p>Message: {message.content} </p>
                 <p>Post Reference: {title} </p>
              </div>
            )
          }
          return null;
        }
        )
      }
      </div>
      <div className='mainbody-section'>
        <h2>Outgoing Messages:</h2> {
          messages && messages.map(message => {
            const {username} = message.fromUser;
            const {title} = message.post;
            const fromUserID = message.fromUser._id;
            if(userID === fromUserID) {
              return (
                <div key={message._id}>
                  <p>From User: {username} </p>
                 <p>Message: {message.content} </p>
                 <p>Post Reference: {title} </p> 
                 </div>
              )
            }
            return null;
          })
        }
        </div> 
    </div>
    
  )
}

export default Profile;
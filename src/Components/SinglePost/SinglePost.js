import React, { useState } from 'react'
import { createMessage} from '../../Api/api'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import './singlePost.css'
const SendNewMessage = ( {token, postID }) => {
    const [message, setMessage ] = useState({ content: ''});
    const [messageSent, setMessageSent] = useState(false);
    
    async function addMessage() {
        await createMessage({ message, postID, token})
        setMessageSent(true);
    }
   
  return (
    <div className='sendmessage'>
      {messageSent ? (
        <p>Message has been sent!</p>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addMessage();
          }}
        >
          <input
            type='text'
            placeholder='Type your message here...'
            onChange={(event) => setMessage({ content: event.target.value })}
          />
          <button type='submit' className='button2'>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
    }
    
function SinglePost({ posts, token,}) {
  const {postID} = useParams();
  const [ message, setMessage ] = useState(false);

  const [currentPost]= posts.filter( post => post._id === postID)
  console.log(currentPost, "currentPost")
  console.log(postID, 'PostID')
  const { title, description, location, price} = currentPost;
  return (
    <div className="singlepost">
      <div >
        <h2 className='singlepost-title'>Single Post Information</h2>
        <div className='singlepost-information'></div>
        <h3>Title: {title} </h3>
        <p> Description: {description} </p>
        <p> Location: {location} </p>
        <p> Price: {price}</p>
      </div>
      <button onClick={() => setMessage(!message)} className='button'>Send message</button>
      {
        message && < SendNewMessage postID={postID} token={token}/>
      }
    </div>
  )
}

export default SinglePost;

import React, { useState } from 'react'
import '../CreatePost/createPost.css';
import { createNewPost } from '../../Api/api';
import { useHistory} from 'react-router-dom'

function CreatePost({token, getPosts}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    
    let history = useHistory();

 async function addPost() {
    const results = await createNewPost(token, {title: title, description: description, price: price, location: location, })
    getPosts(results);
    history.push('/posts')
 }

  return (
    <div className='createpost'>
      <form onSubmit={(event) => {
        event.preventDefault();
        addPost();
      }}>
        <h2> Create a New Post</h2>
      <label>Enter Title:</label>
      <input type='text' placeholder='Title...' onChange={(event) => setTitle(event.target.value)} />
      <label>Enter Description:</label>
      <input type='text' placeholder='Description...' onChange={(event) => setDescription(event.target.value)} />
      <label>Enter Price:</label>
      <input type='text' placeholder='Price...' onChange={(event) => setPrice(event.target.value)} />
      <label>Enter Location:</label>
      <input type='text' placeholder="Location.." onChange={(event) => setLocation(event.target.value)} />

      <button className='button'>Submit New Post</button>
      </form>
    </div>
  )
}

export default CreatePost;

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { updatePost } from '../../Api/api'
import './editPost.css'

function EditPost({posts, token}) {
    const { postID } = useParams();
    const [ currentPost ] = posts.filter(post => post._id === postID);

    console.log(postID, 'EditPost function')

    const { title, description, location, price} = currentPost;

    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedLocation, setEditedLocation] = useState(location);
    const [editedPrice, setEditedPrice] = useState(price);
  
    
    async function editPost() {
        const results = {token: token, title: editedTitle, description: editedDescription, location: editedLocation, price: editedPrice, _id: postID}
    await updatePost(results)
    }

    return (
    <div className='editform'>
      <h2 className='editform-header'>Edit A Post</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        editPost();
      }}>
          <label for="text">New Title:</label>
      <input type='text' placeholder={title} onChange={(event) => setEditedTitle(event.target.value)} />
      <label for="text">New Description:</label>
      <input type='text' placeholder={description} onChange={(event) => setEditedDescription(event.target.value)} />
      <label for="text">New Location:</label>
      <input type='text' placeholder={location} onChange={(event) => setEditedLocation(event.target.value)} />
      <label for="text">New Price:</label>
      <input type='text' placeholder={price} onChange={(event) => setEditedPrice(event.target.value)} />
      <button className='button'>Edit Post</button>
      </form>
    </div>
  )
}

export default EditPost

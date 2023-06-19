import React from 'react'
import './posts.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'; 
import { useState } from 'react';
import { deletePost } from '../../Api/api';
import SearchItems from '../SearchItems/SearchItems'

const Posts = ({posts, token,}) => {
  const reversedPost = posts.reverse()
  const resultsPosts = Array.from(reversedPost);
  // console.log(resultsPosts)
  const [filteredPosts, setFilteredPosts] = useState(resultsPosts);

  async function deletedPost(token, postDelete) {
    const confirmation = await new Promise((resolve) => {
      const confirmationDialog = window.confirm("Are you sure you want to delete this post?");
      resolve(confirmationDialog);
    });
  
    if (confirmation) {
      const results = await deletePost(token, postDelete);
      return results;
    }
  }

  return (
    <div className='mainbody'>
     <div className='search-bar'>

<SearchItems posts={posts} setFilteredPosts={setFilteredPosts}/>
<h2 className='itemstitle'>Items For Sale:</h2>
     </div>
     
     
     {
      filteredPosts.map((post) => {
        const {description, location, price, title, _id, isAuthor} = post;
        return (
          <div className="posts-section" key={_id}>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>

            {
              isAuthor ? (
                <div className='post-button'>
                <button> <Link to={`/editpost/${_id}`} className='button2'>Edit</Link></button>
                <button onClick={() => {deletedPost(token, _id)}} className='button2' >Delete the post</button>
                </div>
        ) : (
          <button className="button2">
             <Link to={`/singlepost/${_id}`} >View Posts</Link>
          </button>
         
        )
            }
          </div>
        )
      }) 
     }
    </div>
  )
}

export default Posts;
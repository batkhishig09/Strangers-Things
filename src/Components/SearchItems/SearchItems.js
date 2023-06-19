import React from 'react'
import { useState } from 'react';
import './searchItems.css';

 function SearchItems({ posts, setFilteredPosts}) {
  const [keyboard, setKeyboard] = useState('');

  const handleChange = (event) => {
    setKeyboard(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const results = posts.filter(post => {
      const title = post.title.toLowerCase();
      const description = post.description.toLowerCase();
      return title.includes(keyboard.toLowerCase()) || description.includes(keyboard.toLowerCase())

    })
    setFilteredPosts(results)
  }
  return (
    <div className='searchitems'>
      <form onSubmit={handleSubmit}>
        <input type='text' className="form-input" placeholder='Search here...' onChange={handleChange}/>
        <button type="submit" className='button'>Search</button>
      </form>
    </div>
  )
}

export default SearchItems;

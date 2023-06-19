import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import {Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts/Posts"
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import { useState, useEffect } from "react";
import { fetchPosts, getUserDetails } from "./Api/api";
import SinglePost from "./Components/SinglePost/SinglePost";
import CreatePost from "./Components/CreatePost/CreatePost";
import EditPost from "./Components/EditPost/EditPost";
import SearchItems from "./Components/SearchItems/SearchItems";

function App() {
const [token, setToken] = useState('');
const [user, setUser] = useState({})
const [posts, setPosts] = useState([])

async function getPosts() {
  try {
  const results = await fetchPosts(token);
  setPosts(results.data.posts);
  } catch (error) {
  console.log("Error fetching posts:", error);
  }
  };

function isLoggedOut () {
  window.localStorage.removeItem('token');
  setToken('');
  setUser({});
};

async function storeToken() {
  const storedToken = window.localStorage.getItem('token');
  
  if (!storedToken) {
    return;
  }
  
  try {
    const results = await getUserDetails(storedToken);
    
    if (results.success) {
      setUser(results.data);
    } else {
      console.log(results.error.message, 'storeToken function failed');
    }
  } catch (error) {
    console.log(error,);
  }
};

useEffect(() => {
  getPosts();
  // console.log("getPosts is Looping over")
},[token])

useEffect(() => {
  storeToken();
  console.log("storeToken is Looping over")
}, [token])

  return (
    <div className="App">
         <Navbar isLoggedOut={isLoggedOut} token={token}/>
    <div className="container">
      <Switch>

       <Route path="/posts">
        <Posts token={token} posts={posts} />
       </Route>

       <Route path="/profile" >
        <Profile user={user} token={token} />
       </Route>

       <Route path="/login">
        <Login setToken={setToken} isLoggedOut={isLoggedOut} />
       </Route>

       <Route path='/singlepost/:postID'>
        <SinglePost posts={posts} token={token} />
       </Route>

       <Route path="/register">
          <Register token={token} setToken={setToken} />
        </Route>

        <Route path='/createpost'>
          <CreatePost token={token} getPosts={getPosts}/>
        </Route>

        <Route exact path="/editpost/:postID">
          <EditPost token={token} posts={posts}/>
        </Route>

       <Route path='/searchItems'>
        <SearchItems posts={posts}/>
       </Route>

       <Route path="/">
          <Home token={token}/>
        </Route>

      </Switch>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </div>
  );
}

export default App;

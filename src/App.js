import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import {Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts/Posts"
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <div className="App">
         <Navbar />
    <div className="container">
      <Switch>
       {/* <Route path="/" />
       <Route path="/posts" element={<Posts />}/>
       <Route path="/profile" element={<Profile />}/>
       <Route path="/login" element={<Login />}/> */}
       <Route path="/posts">
        <Posts />
       </Route>
       <Route path="/profile">
        <Profile />
       </Route>
       <Route path="/login">
        <Login />
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

import "./App.css";
import Navbar from './Components/Navbar/Navbar'
import {Switch, Route } from "react-router-dom";
import Posts from "./Components/Posts/Posts"
import Profile from './Components/Profile/Profile'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
function App() {
  return (
    <div className="App">
         <Navbar />
    <div className="container">
      <Switch>
        
       <Route path="/posts">
        <Posts />
       </Route>
       <Route path="/profile">
        <Profile />
       </Route>
       <Route path="/login">
        <Login />
       </Route>
       <Route path="/">
          <Home />
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

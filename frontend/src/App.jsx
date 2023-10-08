import LoginForm from "./pages/login";
import SignUpForm from "./pages/register";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";

export default function App() {
  return (
    
      <div>
        <div className='header'>
        <a className="logo" href="/game"></a>
        <nav className="navbar">
          <a href="/">Login</a>
          <a href='/register'>Register</a>
        </nav>
        </div>
        <Router>

        <Routes>
          <Route exact path='/' element={<LoginForm/>}/>
          <Route path='/register' element={<SignUpForm/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
        </Router>
      </div>
      
  )
  }
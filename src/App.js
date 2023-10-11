import './App.css';
import Login from './components/Login'
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/crm/*" element={<Navbar/>}></Route>
        </Routes>
         
      </Router>
    </div>
  );
}

export default App;
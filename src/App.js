
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Table from './components/Table/Table';
import About from './components/About/About';
import AddBook from './components/AddBook/AddBook';
import './assets/font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <div>
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>    
      <Route path="register" element={<Register />}/>    
      <Route path="addbook" element={<AddBook />}/>    
      <Route path="table" element={<Table />}/>    
      <Route path="about" element={<About />}>    
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

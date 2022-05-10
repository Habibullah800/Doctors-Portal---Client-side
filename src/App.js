import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Footer from './Page/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

import './App.css';
import Navbar from './Page/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Footer from './Page/Shared/Footer/Footer';
import Appoinment from './Page/Home/Appoinment/Appoinment';
import SignUp from './Page/Login/SignUp';
import RequireAuth from './Page/Login/RequireAuth';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/appoinment' element=
          {
            <RequireAuth>
              <Appoinment></Appoinment>
            </RequireAuth>
          }
        > </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        <Route path='/signUp' element={<SignUp></SignUp>}> </Route>

      </Routes>


    </div>
  );
}

export default App;

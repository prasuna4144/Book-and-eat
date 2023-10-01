import React from 'react'; 
 import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import LoginPage from './Components/Login';
import SignUp from './Components/signUp';
import Details from './Components/Details';
import Breakfast from './screens/Breakfast';
import Lunch from './screens/Lunch';
import Snacks from './screens/Snacks';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      
      <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/breakfast' element={<Breakfast/>}/>
        <Route path='/lunch' element={<Lunch/>}/>
        <Route path='/snacks' element={<Snacks/>}/>
        

          </Routes></BrowserRouter>
    </div>
  );
}

export default App;

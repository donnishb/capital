import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './screens/Home';
import About_ from './screens/About_';
import Services from './screens/Services_';
import Faq from './screens/Faq';
import Contacts from './screens/Contacts';
import Signin from './screens/Signon';
import Signup from './screens/Register';
import Profile from './screens/Profile';
import Protected from './components/Protected';
import Withdraw from './screens/Withdrawal';
import Details from './screens/Details';
import Success from './screens/Success';
import Error from 'screens/Error';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function App() {
  const navigate = useNavigate()
  const [isSignedIn, setIsSignedIn] = useState(null)
  const [withdraw,setWithdraw] = useState(false)
  

  return (

  <div className="App">
    <Routes>
      
      <Route path='/' element ={ <Home />}> </Route>
      <Route path='about' element={<About_ />}></Route>
      <Route path='services' element={<Services />}></Route>
      <Route path='faq' element={<Faq />}></Route>
      <Route path='contact' element={<Contacts />}></Route>
      <Route path='register' element={<Signup />}> </Route>
      <Route path='signin' element={<Signin sign={setIsSignedIn}/>}> </Route>
      <Route path='profile' element={<Protected isSignedIn={isSignedIn}><Profile sw={setWithdraw} sign={setIsSignedIn}/></Protected>}></Route>
      <Route path='withdraw' element={<Withdraw withdraw={withdraw}/>}></Route>
      <Route path='details' element={<Details />}> </Route>
       <Route path='success' element={<Success />} ></Route>
       <Route path='error' element={<Error />} ></Route>
    </Routes>

  </div>
  );
}

export default App;


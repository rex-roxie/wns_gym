import React from 'react'
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/');
      }
  return (
    <div>Home<button onClick={logout}>Logout</button></div>
    
  )
}

export default Home;
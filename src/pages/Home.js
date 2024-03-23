import React from 'react'
import app, { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/');
      }
  return (
    <div>Home
      <button onClick={logout}>Logout</button>
      <p>{auth.currentUser.email}</p>
    </div>
    
  )
}

export default Home;
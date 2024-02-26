import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const signIn = async (event) => {
        event.preventDefault();
        const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("SUCCESS!");
            navigate('/home');
          });

    }

  return (
    <div>
        <button onClick={signIn}>Sign in with Google</button>
    </div>
  )
}

export default Login
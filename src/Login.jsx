import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import './login.css'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from './firebase';
import { login } from './features/counter/appSlice';

const Login = () => {
    const dispatch =useDispatch()
    const signIn=async()=>{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider)
       dispatch(login({username:result.user.displayName,
    profilePic:result.user.photoURL,
    id:result.user.uid
}))
    }
  return (
    <div className='login'>
        <div className="login__container">
            
        <img src="https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg" alt="" />
        <Button variant='outlined' onClick={signIn}>
            Sign In
        </Button>
        </div>
        
    </div>
  )
}

export default Login
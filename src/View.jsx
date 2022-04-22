import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectselectedImage } from './features/counter/appSlice'
import { useNavigate } from 'react-router-dom'
import { ExitToApp } from '@mui/icons-material'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import './view.css'

const View = () => {
    const selectedImage=useSelector(selectselectedImage)
    console.log(selectedImage)
    const history = useNavigate()
    useEffect(()=>{
        if(!selectedImage){
            exit()
        }
    },[selectedImage])
    const exit = ()=>{
        history('/chats')
    }
  return (
  
    <div className='chatView'>
    <img src={selectedImage} onClick={exit}  alt="" />    
    <div className="chatView__timer">
    <CountdownCircleTimer 
    isPlaying
    duration={10}
    strokeWidth={6}
    size={50}
    colors={
        [
            ["#004777",0.33],
            ["#F7B801",0.33],
            ["#A30000",0.33],

        ]
    }>
       {({ remainingTime }) =>{ 
           if(remainingTime===0){exit()}
           
        return remainingTime
     }}
    </CountdownCircleTimer>
    </div>

    </div>
  )
}

export default View
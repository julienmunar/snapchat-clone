import React, { useCallback, useRef, useState } from 'react'
import './webcamCapture.css'
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useDispatch, useSelector } from 'react-redux';
import { setCameraImage } from './features/counter/cameraSlice';
import { useNavigate } from 'react-router-dom';

const WebcamCapture = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const webcamRef = useRef(null)
    console.log('webcamref',webcamRef)

    const capture=useCallback(()=>{
        const imageSrc = webcamRef.current.getScreenshot();
  
        dispatch(setCameraImage(imageSrc))
        navigate("/preview")
   
    },[webcamRef])
    const videoConstraints = {
        width: 250,
        height: 400,
        facingMode: "user"
    };

    return (
        <div className='webcamCapture'>
            <Webcam
                audio={false}
                videoConstraints={videoConstraints}
                ref={webcamRef}
                screenshotFormat="image/jpeg"

            />
            <RadioButtonUncheckedIcon className="webcamCapure__button" onClick={capture}/>

            </div>

    )
}

export default WebcamCapture
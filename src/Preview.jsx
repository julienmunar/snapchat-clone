import React, { useEffect } from 'react'
import { selectImage } from './features/counter/cameraSlice';
import {
    useSelector, useDispatch
} from 'react-redux';
import { useNavigate } from 'react-router-dom'

import CloseIcon from '@mui/icons-material/Close';
import { resetCameraImage } from './features/counter/cameraSlice';
import './preview.css'
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from '@mui/icons-material/Send';
import {v4 as uuid} from 'uuid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL,uploadString,deleteObject  } from "firebase/storage";
import {db, storage} from './firebase'

import { addDoc,collection, Timestamp } from 'firebase/firestore';

const Preview = () => {
    const selectImg = useSelector(selectImage)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!selectImg) {
            navigate("/")
        }
    }, [navigate, selectImg])

    const closePreview = () => {
        dispatch(resetCameraImage())

    }
    console.log(selectImg)
    const sendPost=()=>{
        const id=uuid();
        const metadata = {
            contentType: 'data_url'
          };
        const storageRef=ref(storage,`post/${id}`)
        const uploadTask=uploadString(storageRef,selectImg,"data_url")
        uploadTask.then((data)=>getDownloadURL(data.ref) .then((url)=>
        {   
            addDoc(collection(db,'posts'),{
              imageUrl:url,
              username:'juju',
              read:false,
              //Profile Picture
              timestamp:Timestamp.now()  
            })
            console.log('done')
        }
        
        )).catch((error)=>console.log(error))
    
        
      navigate('/chats')
     

    }



    return (
        <div className='preview'>
            <CloseIcon className='preview__close' onClick={closePreview} />
            <img src={selectImg} alt="" />
            <div className="preview__toolbarRight">
            <TextFieldsIcon/>
            <CreateIcon/>
            <NoteIcon/>
            <MusicNoteIcon/>
            <AttachFileIcon/>
            <CropIcon/>
            <TimerIcon/>
            </div>
            <div onClick={sendPost} className="preview__footer">
                <h2>Send Now</h2>
                <SendIcon />
            </div>
        </div>
    )
}

export default Preview
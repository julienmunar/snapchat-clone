import { Avatar } from '@mui/material'
import React from 'react'
import StopIcon from '@mui/icons-material/Stop';
import './chat.css'
import ReactTimeago from 'react-timeago'
import { useDispatch } from 'react-redux';
import { selectImage } from './features/counter/cameraSlice';
import { usedImage } from './features/counter/appSlice';
import { doc, setDoc,collection,updateDoc } from "firebase/firestore"; 
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
const Chat = ({ id,username, imageUrl, timestamp, profilePic, read }) => {

    const dispatch = useDispatch()
    const history=useNavigate()
    const open = async() => {

        if (!read) {
            dispatch(usedImage(imageUrl))
        }
        const postRef=doc(db,'posts',id)
       await updateDoc(postRef, { read: true });
        history('/chats/view')

    }

    return (
        <div onClick={open} className='chat'>
            <Avatar className="chat__avatar" scr={profilePic} />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>Tap to View - <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} /></p>
            </div>
            {!read && <StopIcon className="chat__readIcon" />}
        </div>
    )
}

export default Chat
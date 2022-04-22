import React, { useEffect, useState } from 'react'
import './chats.css'
import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { async } from '@firebase/util';
import { db } from './firebase';
import { doc, getDoc, getDocs,collection } from "firebase/firestore";
import {  onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import Chat from './chat';
const Chats = () => {


    const [posts, setPosts]=useState([])
    
    

    useEffect(()=>{
        const q = query(collection(db,"posts"),orderBy('timestamp','desc'))
        onSnapshot(q,(QuerySnapshot)=>{
            setPosts(QuerySnapshot.docs.map(doc =>({id:doc.id, data:doc.data()})))
        })
    },[])
    
    console.log(posts)
   
    

    


    return (
        <div className='chats'>
            <div className="chats__header">
                <Avatar className='chats__avatar' />
                <div className="chats__search">
                    <SearchIcon />
                    <input type="text" placeholder='Friends' />
                    
                </div>
                <ChatBubbleIcon className='chats__chatIcon' />
            </div>

            <div className="chats__posts">
                {posts.map(({id, data:{ profilePic,username,timestamp,imageUrl,read}})=><Chat key={id} id={id} username={username} timestamp={timestamp} imageUrl={imageUrl} read={read} profilePic={profilePic}/> )}
                
            </div>



        </div>
    )
}

export default Chats
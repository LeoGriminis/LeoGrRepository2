import React from 'react';

import PostAreaDescr from '../PostAreaName/PostsAreaDescription';
import NewPostArea from '../../newPostArea/NewPostArea';
import classes from './Posts.module.css'
import TextareaAndSendContainer from '../textareaAndButtonSend/TextareaSendContainer';


const Post = (props) => {

    let newPost = props.newPost.map(post =>{
        return <NewPostArea  message = {post.message} like = {post.like} name = {post.name} />
    })

    return (
        <div className = {classes.posts}>

            <PostAreaDescr />
            <TextareaAndSendContainer SendPost = {props.SendPost} 
            ChangeText = {props.ChangeText} state = {props.state} />
            { newPost }
            
        </div>
    )
}


export default Post

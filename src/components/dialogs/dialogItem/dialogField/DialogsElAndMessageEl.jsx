import React from 'react'
import Message from '../../messages/Message'
import DialogItem from '../DialogItem'
import classes from './Dialogs.module.css'


const DialogsAndMessagesElements = (props) => {
    
    
        let dialogsElement = props.contacts.map( contact => <DialogItem id = {contact.id}
            name = {contact.name}/> )
    
    
        let messagesElement = props.posts.map(m =>{
           return <Message text = {m.message} />
       }) 

       return (

            <div className = {classes.contactsWrapper}>
                
                <div className={classes.names}>
                    {dialogsElement}
                </div>
                <div className={classes.messages}>
                    {messagesElement}
                </div>
                
                
            </div>

       )
    
}

export default DialogsAndMessagesElements
import React from 'react'
import classes from './Dialogs.module.css'
import DialogsAndMessagesElements from './DialogsElAndMessageEl'



const Dialogs = (props) => {
 
    let changeMessageText = (e) => {
        let text = e.target.value
        props.changeMessageText(text)
    }

    let buttonSendMessage = () => {
        props.sendMessage()
    }

 

    return (
        <div>
            <DialogsAndMessagesElements contacts={props.contacts} posts={props.posts}  />

            <div className={classes.dialogPage}>

                <div className={classes.contactsWrapper}>
                    <div className={classes.users}>
                        {props.dialogsElement}
                    </div>


                    <div className={classes.separator}></div>

                    <div className={classes.messageWrapper}>
                        <div>{props.messagesElement}</div>

                    </div>
                </div>

                <div className={classes.MessageButtonContainer}>
                    <div>
                        <textarea value={props.newMessageBody} onChange={changeMessageText} name="messText"
                            className={classes.messText}></textarea>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button className={classes.button} onClick={buttonSendMessage}>send</button>
                    </div>
                </div>
                {/* MessageButtonContainer */}


            </div>
        </div>
    // dialog page
    )
}

export default Dialogs

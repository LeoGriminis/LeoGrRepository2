import React from 'react'
import classes from './TextareaWithSend.module.css'


const TextareaAndSend = (props) => {
    

    let addPost = () => {
        props.SendPost()
    }
    let onPostChange = (e) => {
        let text = e.target.value
        props.ChangeText(text)
    }

    return (

        <div className={classes.text_and_button}>

            <textarea onChange={onPostChange} placeholder='New post....' name="text"
             className={classes.textA} value={props.defaultPostValue} />

            <div className={classes.buttonDiv}>
                <button className={classes.send} onClick={ addPost }>
                    Send
                </button>
            </div>

        </div>

    )
}



export default TextareaAndSend
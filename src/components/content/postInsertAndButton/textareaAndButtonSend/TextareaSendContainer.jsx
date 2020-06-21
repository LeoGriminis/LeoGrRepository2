import React from 'react'
import TextareaAndSend from './TextareaWithSend'



const TextareaAndSendContainer = (props) => {


    return (

        <TextareaAndSend defaultPostValue={ props.state.profileReducer.defaultPostValue } SendPost = {props.SendPost} 
        ChangeText = {props.ChangeText} />
    )
}



export default TextareaAndSendContainer
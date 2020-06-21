import { changeMessageTextActionCreator, buttonSendMessageActionCreator } from '../../../redux/dialogReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
   
    return {
        newMessageBody: state.dialogsReducer.newMessageBody,
        contacts : state.dialogsReducer.contactsPage.contacts,
        posts : state.dialogsReducer.contactsPage.posts
    }
    
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        sendMessage: () => {
            dispatch(buttonSendMessageActionCreator())
        },

        changeMessageText: (text) => {
            dispatch(changeMessageTextActionCreator(text))
        }
        
    }
}


const DialogsContainer = connect(mapStateToProps , mapDispatchToProps)(Dialogs)

export default DialogsContainer

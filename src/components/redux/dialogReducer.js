const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
    

        contactsPage : {

            contacts : [
                {id:'1' , name: 'Valera'},
                {id:'2' , name: 'Vasia'},
                {id:'3' , name: 'Oleg'},
                {id:'4' , name: 'Maria'}
            ] ,

            posts : [
                {id:1, message: 'hey'},
                {id:2, message: 'yoyoy'},
                {id:3, message: 'blabla'},
                {id:4,  message: 'hello'}
            ],
            
            myFriends : [
                {name: 'Pavel' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT33UQeyqQs-pB1ai9yAZATw0Kd9mOWC7UeNMeRXjq2mHtfMZYN&usqp=CAU" alt=""/>'},
                {name: 'Oliga' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT33UQeyqQs-pB1ai9yAZATw0Kd9mOWC7UeNMeRXjq2mHtfMZYN&usqp=CAU" alt=""/>'},
                {name: 'Elena' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT33UQeyqQs-pB1ai9yAZATw0Kd9mOWC7UeNMeRXjq2mHtfMZYN&usqp=CAU" alt=""/>'}
            ],


        newMessageBody: '' ,
 
    } ,

}


const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type){

    case UPDATE_NEW_MESSAGE_BODY : {
        let stateCopy = {...state} 
        stateCopy.newMessageBody = action.message  
        return stateCopy;

    }

    case SEND_MESSAGE: {
        let text = state.newMessageBody
        let stateCopy = {...state}
      
        stateCopy.contactsPage.posts = state.contactsPage.posts
        stateCopy.contactsPage.posts.push({id: 5 , message: text })
        stateCopy.newMessageBody = ''
        return stateCopy;
    
    }
    default :
    return state

    }   
}


export const changeMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        message : text 
    }
}
export const buttonSendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE,
        
    }
}


export default dialogsReducer;
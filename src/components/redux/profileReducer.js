const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {

        postsPage : {
            
            newPost : [
                {id: 1 , like:'1' , message:'hello' , name: 'Slava'},
                {id: 2 , like:'22' , message:'hello2' , name: 'Egor'}
            ],
           
        },
        defaultPostValue: '',
}

const profileReducer = (state = initialState, action) => {


    switch(action.type){
        case ADD_POST: 
        let post = {
            id: 5,
            message: state.defaultPostValue ,
            like: 12, 
            name: 'Victor'
        }
        
        return{
            ...state , 
            postsPage: {
                newPost: [...state.postsPage.newPost , post]
            },
            
            defaultPostValue: ''
        }
        // stateCopy.postsPage.newPost = [...state.postsPage.newPost]
        // stateCopy.postsPage.newPost.push(post)
        // stateCopy.defaultPostValue = ''
        // return stateCopy;
        
        case UPDATE_NEW_TEXT: {
            return {
                ...state,
                defaultPostValue : action.newText
            }
            // stateCopy.defaultPostValue = action.newText
            // return stateCopy;
        }
        default: 
        return state
    }
}



export const addPostActionCreator = () => ({type:ADD_POST})

export const onPostChangeActionCreator = (text) => ({
        type: UPDATE_NEW_TEXT,
        newText: text 
    })


    
export default profileReducer;
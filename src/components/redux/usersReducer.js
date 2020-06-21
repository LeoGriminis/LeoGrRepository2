const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET-PAGE'



let initialState = {

       users:[],
       pageSize: 5 ,
       totalUsersCount: 19 ,
       currentPage : 1

}

const usersReducer = (state = initialState , action) => {


    switch(action.type){

        case FOLLOW :
        return{
            ...state , 
            users: state.users.map((user)=>{
                if(user.id === action.useriD){
                    return {...user , followed : true}
                }
                return user;
            }) 
        }

        case UNFOLLOW :
            return{
                ...state , 
                users: state.users.map((user)=>{
                    if(user.id === action.useriD){
                        return {...user , followed : false}
                    }
                    return user;
                }) 
            }
            
        case SET_USERS: {
            return {
                ...state ,
                 users: [...state.users, ...action.users]
            }
        }

        case SET_PAGE: {
            return {
                ...state ,
                 currentPage: action.currentPage
            }
        }
        


        default: 
        return state
    }
}



export const followAC = (useriD) => ({type: FOLLOW , useriD })
export const unfollowAC = (useriD) => ({type: UNFOLLOW , useriD})
export const setUsersAC = (users) => ({type: SET_USERS , users})
export const setCurrentPageAC = (currentPage) => ({type: SET_PAGE , currentPage})


    
export default usersReducer;
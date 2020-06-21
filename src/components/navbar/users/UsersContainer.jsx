
import UsersClass from './UsersClass'
import { connect } from 'react-redux'
import { followAC , unfollowAC , setUsersAC, setCurrentPageAC ,  } from '../../redux/usersReducer'



let mapStateToProps = (state) => {
    
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch(followAC(userId))
        },
        unfollow : (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers : (users) => {
            dispatch(setUsersAC(users))
        },
       setCurrentPage:(pageNumber) => {
           dispatch(setCurrentPageAC(pageNumber))
       }
    }

}




const UsersContainer = connect(mapStateToProps , mapDispatchToProps)(UsersClass)

export default  UsersContainer


import Nav from './Nav'
import { connect } from 'react-redux'




let mapStateToProps = (state) => {
    return {
        myFriends: state.dialogsReducer.contactsPage.myFriends,

    }
}

    const NavContainer = connect(mapStateToProps)(Nav)
    
    
    export default NavContainer
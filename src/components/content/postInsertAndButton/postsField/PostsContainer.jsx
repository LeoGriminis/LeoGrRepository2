import Post from './Posts';
import { connect } from 'react-redux';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profileReducer';



let mapStateToProps = (state) => {
    return {
        newPost : state.profileReducer.postsPage.newPost,
        state: state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        SendPost: () => {
            dispatch(addPostActionCreator())
    },
        ChangeText: (text) => {
            dispatch(onPostChangeActionCreator(text))
        }
    }
}

const PostContainer = connect(mapStateToProps , mapDispatchToProps)(Post)


export default PostContainer

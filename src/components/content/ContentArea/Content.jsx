import React from 'react';
import ImageWallper from '../wallperImg/Images';
import AvatarAndDescriptions from '../avatar/Avatar_with_descriptions';
import classes from './Content.module.css'
import PostContainer from '../postInsertAndButton/postsField/PostsContainer';




const Content = () => {

    return (
        <div className={classes.content}>

            <ImageWallper />
            <AvatarAndDescriptions />
            <PostContainer />

        </div>
    )
}

export default Content;


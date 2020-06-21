import React from 'react';
import PersInfo from '../personalInfo/PersInfo';
import AvatarImg from './AvatarImg';
import classes from './Avatar_and_descr.module.css'




const AvatarAndDescriptions = () => {
    return(
        <div className={classes.avatar_and_descr}>
            
            <AvatarImg />
            <PersInfo />
        
        </div>
    )
}

export default AvatarAndDescriptions 
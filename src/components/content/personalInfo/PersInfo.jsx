import React from 'react';
import classes from './PersonalInfo.module.css'

const PersInfo = () => {
    return (
        <div className={classes.personal_info}>
            <div className={classes.info_item}>Leo G</div>
            <div className={classes.info_item}>25.04.1994</div>
            <div className={classes.info_item}>Odessa</div>
            <div className={classes.info_item}>Ipsia</div>
            <div className={classes.info_item}>Hello.com</div>
        </div>
    )
}


export default PersInfo;


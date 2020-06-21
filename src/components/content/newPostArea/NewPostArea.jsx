import React from 'react'
import classes from './NewPostArea.module.css'

const NewPostArea = (props) => {
    return (
        <div className={classes.postWithLike}>
            <div className={classes.postItem}>
                {props.message}
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRi8C_cTAcOtP4xboMpUsjSCTedCfdEhcY8Cp6DxepYlAkriJ23&usqp=CAU" alt="ava"/>
    <div className={classes.personName}>{props.name}</div>
            </div>
            <div className={classes.like}>
                Like {props.like}
            </div>
        </div>
        
    )
}


export default NewPostArea
import React from 'react'
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'



const DialogItem = (props) => {

    let path = '/Dialogs/' + props.id

    return (
        <div className={classes.contact__item + ' ' + classes.active}>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem
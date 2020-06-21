import React from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './friends/Friends'




const Nav = (props)=>{


let myFriend = props.myFriends.map(friend =>{
        return <Friends name={friend.name} img = {friend.img} />
    })

  return(
  
<div className={classes.navWrapper}>
    <nav className = {classes.nav}>

        <div className ={classes.item}>
            <NavLink to="/Content" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Dialogs" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/News" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/Settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to = "/Users" activeClassName={classes.active}>U-S-E-R-S</NavLink>
        </div>

    </nav>


    <div className={classes.friends__wrapper}>

        <div className = {classes.friends__title}>
            Friends
        </div>

        <div className={classes.friends__name}>
            { myFriend } 
        </div>
    </div>
        

    
    
</div>
    )
}



export default Nav
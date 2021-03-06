import React from 'react'
import classes from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../../../assets/images/images.jpg'


class Users extends React.Component{


   

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>{    
            this.props.setUsers(response.data.items)
                })
    }

    
    render(){ 

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1 ; i <= pagesCount ; i++) {
            pages.push(i)
        }

        return  <div>    
            <div>
            
            {pages.map(page=>{
                return <span className={this.props.currentPage === page && classes.selectedPage} 
                onClick={this.props.setCurrentPage(page)}>{page}</span>
            })}
           </div>
        {
       
            this.props.users.map(u => <div key = {u.id}>
                <span>
                    <div className = {classes.img}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </div>
                </span>
                <span>
                    <div>
                        { u.followed 
                        ? 
                        <button onClick = { () => this.props.unfollow(u.id) } className={classes.button}>unfollow</button> : 
                        <button onClick = { () => this.props.follow(u.id) } className = {classes.button}>follow</button> }
                       
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                   
                </span>
            </div>)
        }
    </div>

    }
    debugger; 
}

export default Users
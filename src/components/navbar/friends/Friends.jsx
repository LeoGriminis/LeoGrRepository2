import React from 'react' 
import classes from './../Nav.module.css'




const Friends = (props) => {


    return (
        <div>

                <div className={classes.friends__name_item}>


                    <div>
                        <img src = {props.img}  alt=""/>
                    </div>

                    <div>
                        {props.name}
                    </div>
                    
                </div>
         
        </div>
       
    )
}

export default Friends
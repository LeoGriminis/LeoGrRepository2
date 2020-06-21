// import profileReducer from "./profileReducer"
// import dialogsReducer from "./dialogReducer"


// let store = {
//     _state: {

//         contactsPage : {
//             contacts : [
//                 {id:'1' , name: 'Valera'},
//                 {id:'2' , name: 'Vasia'},
//                 {id:'3' , name: 'Oleg'},
//                 {id:'4' , name: 'Maria'}
//             ] ,
            
//             myFriends : [
//                 {name: 'Pavel' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT33UQeyqQs-pB1ai9yAZATw0Kd9mOWC7UeNMeRXjq2mHtfMZYN&usqp=CAU" alt=""/>'},
//                 {name: 'Oliga' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT33UQeyqQs-pB1ai9yAZATw0Kd9mOWC7UeNMeRXjq2mHtfMZYN&usqp=CAU" alt=""/>'},
//                 {name: 'Elena' , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT33UQeyqQs-pB1ai9yAZATw0Kd9mOWC7UeNMeRXjq2mHtfMZYN&usqp=CAU" alt=""/>'}
//             ]
//         },
    
//         postsPage : {
            
//             newPost : [
//                 {id: 1 , like:'1' , message:'hello' , name: 'Slava'},
//                 {id: 2 , like:'22' , message:'hello2' , name: 'Egor'}
//             ],
//             posts : [
//                {id:1, message: 'hey'},
//                {id:2, message: 'yoyoy'},
//                {id:3, message: 'blabla'},
//                {id:4,  message: 'hello'}
//            ]
//         },

//         newMessageBody: '' ,
//         defaultPostValue: '' , 
//     } ,

//     _rerendering() {
//         console.log('rendered')
//     },

//     getState(){
//         return this._state
//     },
//     subscribe(observer){
//         this._rerendering = observer  
//     },


//     dispatch(action){


//         this._state = profileReducer(this._state , action)
//         this._state = dialogsReducer(this._state , action)

//         this._rerendering(this._state)

//         }
//         // dispatch
        
    

// }
// // store




// export default store



import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Content from './components/content/ContentArea/Content' 
import {Route } from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from './components/dialogs/dialogItem/dialogField/DialogsContainer';
import NavContainer from './components/navbar/NavContainer';
import UsersContainer from './components/navbar/users/UsersContainer';



const App = () => {


  return (
    
      <div className='app-wrapper'>


        <Header />
        <NavContainer/>
        <div className='app-wrapper-content'>

          <Route path='/Content' render= {
             () => <Content /> } />
          <Route path='/Dialogs' render= { () => <DialogsContainer />} />
          <Route path='/Users' render= { () => <UsersContainer />} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />

        </div>
      
      </div>
      
  )
}


export default App;



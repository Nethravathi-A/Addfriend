import React from 'react';
import Nav from './components/Nav';
import About from './components/AddFriends';
import Login from './components/YourFriends';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AddFriends from './components/AddFriends';
import YourFriends from './components/YourFriends';

function App(){
    return(
        <Router>
        <div className="App">
            <h1>Friends</h1>
            
            <Nav/>
            <Switch>
            <Route path="/about" component={About}/>
            <Route path="/Login" component={Login}/>
            <AddFriends />
            <YourFriends/>
            </Switch>
        </div>
        </Router>
    )
}


export default App;

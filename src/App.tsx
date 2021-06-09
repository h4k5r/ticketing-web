import React from 'react';
import {Route,Switch} from 'react-router-dom'

import './App.css';
import backImg from './images/image_1.svg'

import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import TicketHistoryPage from "./pages/TicketHistoryPage/TicketHistoryPage";
import TrackPage from "./pages/TrackPage/TrackPage";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
            <Route path={'/'} exact><LandingPage/></Route>
            <Route path={'/login'} ><LoginPage/></Route>
            <Route path={'/profile'} ><ProfilePage/></Route>
            <Route path={'/search'} ><SearchPage/></Route>
            <Route path={'/history'} ><TicketHistoryPage/></Route>
            <Route path={'/track'} ><TrackPage/></Route>
            <Route path={'/'}> 404</Route>
        </Switch>
        <div className={'back'}>
            <img className={'backImg'} src={backImg} alt={'bus-img'}/>
        </div>
    </div>
  );
}

export default App;
import React, { useState } from "react";
import "../styles/Home.css";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Feed from "../components/Feed";
import Messages from "../components/Messages";
import Explore from "../components/Explore";
import Profile from "../components/Profile";

import Notifications from "../components/Notifications";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Home = () => {
  return (
    <Router>
      <div className='home-container grid'>
        <LeftSidebar />
        <Switch>
          <Route exact path='/'>
            <Feed />
          </Route>
          <Route path='/messages'>
            <Messages />
          </Route>
          <Route path='/explore'>
            <Explore />
          </Route>

          <Route path='/notifications'>
            <Notifications />
          </Route>

          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
        <RightSidebar />
      </div>
    </Router>
  );
};

export default Home;

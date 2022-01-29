import React, { useState, useEffect } from 'react';
import axios from 'axios'
import NavigationBar from './components/NavigationBar';
//REDUX ----------
import { useDispatch, useSelector } from 'react-redux';
import { gather_all_teams } from './__actions/gatherAllTeams';
//-------------------
//ROUTES++++++++++++++++++++++++++++
import Home from './ROUTES/Home';
import Teams from './ROUTES/Teams';
import Seasons from './ROUTES/Seasons';
import Players from './ROUTES/Players';
//AUTH ROUTES =====
//++++++++++++++++++++++++++++++++++
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import useAuth from './useAuth';
import './App.css';
import Loading from './components/Loading';




export default function App() {

  const dispatch = useDispatch();
  const teamList = useSelector(state=>state.teams)
  
  useEffect(()=>{ // GETS ALL NBA TEAMS
    axios.get(`http://localhost:5000/teamData/getAll`)
      .then(res => {
        //console.log(res.data);
        dispatch(gather_all_teams(res.data))
      })
  },[])

  return (
    <div className='App'>
      <div style={{ width: '100%', position: 'fixed', top: '0px', left: '0px', zIndex: 1 }}><NavigationBar /></div>

      <Routes>
        <Route path="/" element={teamList ? <Home /> : <Loading />} />
        <Route path="/teams" element={teamList ? <Teams /> : <Loading />} />
        <Route path="/seasons" element={teamList ? <Seasons /> : <Loading />} />
        <Route path="/players" element={teamList ? <Players /> : <Loading />} />
        {/* <Route
            path="/episodes"
            element={
              <RequireAuth>
                <Episodes />
              </RequireAuth>
            }
          /> */}
      </Routes>
    </div>
  );
}

function RequireAuth({ children }) {
  const { authed } = useAuth();
  const location = useLocation();

  return authed === true
    ? children
    : <Navigate
        to="/login"
        replace
        state={{ path: location.pathname }}
      />;
}

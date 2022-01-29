import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

export default function Teams() {

  const customStyles = {
    'container' : {
      backgroundColor : 'white',
      color: 'black',
      padding: '5px',
      height: '95vh',
      paddingTop: '50px'
    },
    'teamBanner' : {
      fontSize: '20px',
      fontWeight: '600'
    }
  }

  const teamList = useSelector(state=>state.teams)

  return (
  <Grid container sx={customStyles.container}>
    <Grid item xs={3}>
        {teamList.map((eachTeam)=>{
          return (
            <Grid container sx={customStyles.teamBanner}>
                <Grid item xs={3} sx={{ fontSize: '24px', textAlign: 'center' }}>
                    {eachTeam.ABBREVIATION}
                </Grid>
                <Grid item xs={9} sx={{ textAlign: 'left', paddingTop: '3px' }}>
                    {eachTeam.NICKNAME}
                </Grid>
            </Grid>
          )
        })}
    </Grid>
    <Grid item xs={9}>

    </Grid>
  </Grid>
  )
}

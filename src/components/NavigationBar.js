import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';


export default function NavigationBar() {
    const customStyles = {
      'root': {
        flexGrow: 1,
        padding: '10px'
      },
      'navBar': {
        textAlign: 'center',
        height: '50px',
        paddingTop: '10px',
        color: 'white',
        fontSize: '20px',
        textShadow: '1px 1px 1px rgb(0,0,0)',
        fontWeight: 700,
        letterSpacing: '3px'
      }
    }

    const navigate = useNavigate();

    const [navColor, setNavColor] = useState('rgba(255,255,255,.0)')
    const [hoveredOver, setHoveredOver] = useState('none')



  useEffect(()=>{
    window.onscroll = function() {
      if(window.pageYOffset < 100) {
        setNavColor('rgba(255,255,255,.0)')
      }
      else{
          setNavColor('rgba(0,0,0,.4)')
      }
    };
  })

  return (
    <div sx={customStyles.root}>
            <Grid container spacing={0} sx={[customStyles.navBar,{backgroundColor: navColor}]}>
                <Grid item xs={1} onClick={()=>navigate('/')} sx={{ paddingLeft: '5px', textAlign: 'left', letterSpacing: '4px' }}>
                     HOME
                </Grid>
                <Grid item xs={2} onClick={()=>navigate('/teams')} onMouseEnter={()=>setHoveredOver('webDesign')} onMouseLeave={()=>setHoveredOver('none')} sx={{  textAlign: 'right', paddingTop: hoveredOver == 'webDesign' ? '12px' : '0px' }}>
                     TEAMS
                </Grid>
                <Grid item xs={2} onClick={()=>navigate('/seasons')} onMouseEnter={()=>setHoveredOver('marketing')} onMouseLeave={()=>setHoveredOver('none')} sx={{  textAlign: 'center', paddingTop: hoveredOver == 'marketing' ? '12px' : '0px' }}>
                     SEASONS
                </Grid>
                <Grid item xs={2} onClick={()=>navigate('/players')} onMouseEnter={()=>setHoveredOver('about')} onMouseLeave={()=>setHoveredOver('none')} sx={{  textAlign: 'left', paddingTop: hoveredOver == 'about' ? '12px' : '0px' }}>
                     PLAYERS
                </Grid>
                <Grid item xs={5}>
                     
                </Grid>
            </Grid>
  
    </div>
  );
}
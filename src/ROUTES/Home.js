import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import coverPageBball from '../images/coverPageBball.jpg';
import reverse from '../images/reverse.jpg';

const template = {
    companyName : 'NBArchive',
    primaryColor : '#ee6730',
    secondaryColor: 'white',
    fontTheme: "'Francois One', sans-serif",
    fontThemeSecondary: "'Crete Round', serif"
}

export default function Home() {
    const customStyles = {
        "root": {
            flexGrow: 1,
          },
    }
  
    const [homeButtonColor, setHomeButtonColor] = useState(template.primaryColor)
    const [buttonTextColor, setButtonTextColor] = useState('black')
    
    
  
    return (
      <div style={customStyles.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} style={{ height: window.screen.height  * 2, backgroundImage: `url(${coverPageBball})`, backgroundSize: '100% 100%' }}>
                  <Grid container spacing={0} style={{ paddingTop: '100px' }}>
                      
                      <Grid item xs={12} style={{  textAlign: 'center', fontSize: '72px', color: template.secondaryColor, letterSpacing: '9px', fontWeight: 600, fontFamily: template.fontTheme, textShadow: '1px 1px 3px #ee6730' }}>
                           <Paper>{template.companyName}</Paper>
               
                      </Grid>
                      <Grid item xs={12} style={{  textAlign: 'center', fontSize: '14px', paddingTop: '20px', color: 'white', letterSpacing: '9px', fontWeight: 600, fontFamily: template.fontTheme, textShadow: '1px 1px 3px rgb(0,0,0)' }}>
                           By Dillon Lee
                      </Grid>
                      <Grid item xs={12} style={{ paddingTop: '20px' }}>
                            <Button variant="contained" onMouseEnter={()=>{setHomeButtonColor('rgba(0,0,0,.3)');setButtonTextColor('white')}} onMouseLeave={()=>{setHomeButtonColor(template.primaryColor);setButtonTextColor('black')}} style={{ backgroundColor: homeButtonColor, color: buttonTextColor, zIndex: 0 }}>Learn More</Button>
                      </Grid>
                      <Grid item xs={12} style={{ height: '30px' }}>
  
                      </Grid>
                      <Grid item xs={12} style={{ paddingTop: '30px', paddingLeft: '20px', color: 'white', textShadow: '1px 1px 1px rgb(0,0,0)', fontSize: '20px' }}>
                         {/* {  for the love of the game} */}
                             
                      </Grid>
                     
  
                  </Grid>
          </Grid>
          <Grid item xs={12} style={{ height: window.screen.height  * 2, backgroundImage: `url(${reverse})`, backgroundSize: '100% 100%' }}>
                  <Grid container spacing={0} style={{ paddingTop: '100px' }}>
                      
                     
                     
  
                  </Grid>
          </Grid>
          
        </Grid>
      </div>
    );
  }

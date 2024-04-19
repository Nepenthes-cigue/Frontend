// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  return (
    <>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon profil
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>

      <h1>Emma ROBERT</h1>
      <div>
        <p>
          <img src="https://media.licdn.com/dms/image/D4E03AQHx83pjkdmgQg/profile-displayphoto-shrink_200_200/0/1685394100929?e=2147483647&v=beta&t=HfysQipZXI1lF0Om5BIKGYzCt33RPRNVJvd8mSScksE"
            alt="Emma ROBERT" width="100" height="100" />
        </p>
      </div>
      <div className="card">
        <h2>Biographie</h2>
        <p>
          Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
          Perspiciatis, neque assumenda
          autem distinctio optio quia odit,
          quasi deleniti, eaque in eos amet quas!
          Eos sunt eius, obcaecati esse explicabo animi!
        </p>
      </div>
    </>
  )
}

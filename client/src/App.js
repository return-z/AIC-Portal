import React, {useState} from 'react'
import Home from './Home';
import Navbar from './components/Navbar/Navbar';
import { Container, Grid } from '@material-ui/core';
import Auth from './auth/Auth'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Bookapp from './components/Pages/Dashboard/Services/Bookapp/Bookapp';

const App = () => {
  //const [filterCategory, setFilterCategory] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter basename='/'>
      <Container maxWidth="lg">
        <Navbar open={open} setOpen={setOpen}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bookapp" element={<Bookapp />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
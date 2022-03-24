import React, {useState} from 'react'
import Home from './Home';
import Navbar from './Components/Navbar/Navbar';
import { Container, Grid } from '@material-ui/core';
import Auth from './Auth/Auth'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard/Dashboard';

const App = () => {
  //const [filterCategory, setFilterCategory] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar open={open} setOpen={setOpen}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;
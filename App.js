import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Users from './Users';
import CreateUser from './CreateUser'
import Home from './Home'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import Container from 'react-bootstrap/Container'


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home"><Link to="/create">Create Users</Link></Nav.Link>
              <Nav.Link href="#features"><Link to="/users">Users</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/home">Home</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/create" element={<CreateUser/>}/>
          <Route exact path="/users" element={<Users/>}/>
          {/* <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/> */}
        </Routes>

        {/* <Switch>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/user">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </Router>
    </div>

  );
}

export default App;

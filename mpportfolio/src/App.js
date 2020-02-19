import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Routes from './components/Routes';

class App extends Component {
  render() {
  return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Mike Partin" style={{color: 'white'}}>
            <Navigation>
                <Link to="/About">About</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/About">About</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Routes />
        </Content>
    </Layout>
    
</div>
  )}};
export default App;

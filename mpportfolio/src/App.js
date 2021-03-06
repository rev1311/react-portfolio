import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Routes from './components/Routes';

class App extends Component {
  render() {
  return (


    <div style={{height: '700px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className='header-color' title={<span><span style={{ color: '#ddd' }}>Michael Partin</span></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Navigator">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <Routes />
        </Content>
    </Layout>
</div>


  )}};
export default App;

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import fas from 'react-fontawesome';
import '../App.css';

const style = {
    color: '#fff',
    background: '#666',
    padding: '10px',
    margin: '10px',
}

class Landing extends Component {
    render() {
        return(
            <div style={{ width: '80%', margin: 'auto', background: '#ddd', padding: '10px'}}>
                <Grid className="grid1" style={style}>
                    <Cell col={12}>row 1</Cell>
                </Grid>
                <div className="title">
                <h1>Full Stack Web Developer</h1>
                </div> 
            </div>
           
        )
    }
}

export default Landing;
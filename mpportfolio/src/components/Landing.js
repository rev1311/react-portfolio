import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const style = {
    color: '#fff',
    background: '#000',
    padding: '10px',
    margin: '10px',
    borderradius: '10px'
}

class Landing extends Component {
    render() {
        return(
            <div style={{ width: '80%', margin: 'auto', background: '#ddd', padding: '10px'}}>
                <Grid className="grid1" style={style}>
                    <Cell col={12}>row 1</Cell>
                </Grid>
                <Grid className="grid2" style={style}>
                    <Cell col={4}>row 2</Cell>
                    <Cell col={4}>row 2</Cell>
                    <Cell col={4}>row 2</Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

class Resume extends Component {
    render() {
        return(
            <div style={{ height: '90%', width: '80%', margin: 'auto', padding: '10px'}}>
                <Grid>
                    <Cell col={12}>
                        <div className="resume">
                            <h2>Resume</h2>
                            <h4>coming soon</h4>
                        </div>
                    </Cell>
                </Grid>    
            </div>        
        )
    }
}

export default Resume;
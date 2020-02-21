import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';
import ProjectCard from './ProjectCard';


class Projects extends Component {
    render() {
        return(
            <div style={{ height: '100%', width: '80%', margin: 'auto', padding: '10px' }}>
                <Grid style={{ padding: '10px', margin: 'auto' }}>
                    <ProjectCard />
                </Grid> 
            </div>      
        )
    }
}

export default Projects;
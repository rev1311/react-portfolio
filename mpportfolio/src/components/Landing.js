import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pad = {
    padding: '10px',
    margin: '10px'
}

class Landing extends Component {
    render() {
        return(
            <div style={{ height: '90%', width: '80%', margin: 'auto', padding: '10px'}}>
                <Grid>
                    <Cell col={12}>
                       <div className="title">
                        <h1>Michael Partin</h1>
                        <h3>Napa, CA</h3>
                        <h2>Web Developer</h2>
                        <hr />
                        <p>
                        <FontAwesomeIcon icon={faHtml5} size='8x' style={pad}/> 
                        <FontAwesomeIcon icon={faCss3Alt} size='8x' style={pad}/>
                        <FontAwesomeIcon icon={faJs} size='8x' style={pad}/>
                        <FontAwesomeIcon icon={faReact} size='8x' style={pad}/>
                        <FontAwesomeIcon icon={faNodeJs} size='8x' style={pad}/>
                        </p>
                        </div>
                    </Cell>
                </Grid>    
            </div>
        )
    }
}

export default Landing;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const pad = {
    padding: '10px',
    margin: '10px'
}

class Contact extends Component {
    render() {
        return(
            <div style={{ height: '90%', width: '80%', margin: 'auto', padding: '10px'}}>
            <Grid>
                <Cell col={12}>
                    <div className="contact">
                        <h2>Contact</h2>
                        <p>
                            <Link to="https://github.com/rev1311"><FontAwesomeIcon icon={faGithub} size='8x' style={pad}/></Link> 
                            <Link to="https://www.linkedin.com/in/michael-partin/"><FontAwesomeIcon icon={faLinkedin} size='8x' style={pad}/></Link> 
                        </p>
                    </div>
                </Cell>
            </Grid>    
        </div> 
        )
    }
}

export default Contact;
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../App.css';

class About extends Component {
    render() {
        return(
            <div style={{ height: '90%', width: '80%', margin: 'auto', padding: '10px'}}>
                <Grid>
                    <Cell col={12}>
                        <div className="about" className="title">
                            <h2>Who I am</h2>
                            <h4>
                                Web developer. Graphic designer. Print Nerd. Audible/podcast enthusiast. Jeeps. Doggos.
                            </h4>
                            <h4>
                                HTML5, CSS3, JavaScript, React, Nodejs, Express, MongoDB, Mongoose, MySQL, Sequelize
                            </h4>
                            <h4>
                                Adobe Illustrator, PhotoShop, InDesign
                            </h4>
                            <h4>
                                Management Experience. Team building. Lean/6s.
                            </h4>
                        </div>
                    </Cell>
                </Grid>    
            </div>        
        )
    }
}

export default About;
import React, { Component } from 'react';
import { Cell, Card, CardTitle, CardText, Button, CardActions } from 'react-mdl';
import { Link } from 'react-router-dom';
import projects from '../projects.json';


class ProjectCard extends Component {
    state = {
        id: 0,
        name: "",
        img: "",
        desc: "",
        projects
    }

    render() {
        const projectcards = [...this.state.projects];

        return (
            projectcards.map(card => {
                return (
            <div>
            
                <Cell col={3} key={card.id}>
                    <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', background: `url(${card.img}) bottom right 15% no-repeat #46B6AC`}}>{card.name}</CardTitle>
                        <CardText>
                            {card.desc}
                        </CardText>
                        <CardActions border>
                            <Button colored><Link to={card.git}>View Source</Link></Button>
                            <Button colored><Link to={card.page}>View App</Link></Button>
                        </CardActions>
                    </Card>        
                </Cell>
            
            </div>
        )
    }
))}

}

export default ProjectCard;

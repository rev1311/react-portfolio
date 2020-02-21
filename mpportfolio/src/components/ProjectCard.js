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
                            <Button colored><a href={card.git} target="_blank">View Source</a></Button>
                            <Button colored><a href={card.page} target="_blank">View App</a></Button>
                        </CardActions>
                    </Card>        
                </Cell>
            
            </div>
        )
    }
))}

}

export default ProjectCard;

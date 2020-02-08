import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import PublicIcon from '@material-ui/icons/Public';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
class Projects extends Component {
    state = { 
        projects: [
            { 
                id: 1,
                image: 'assets/portfolio.png',
                title: 'Portfolio personal site',
                description: 'This is a react and express web application created with react as a front-end library to showcase my skills in form of a portfolio',
                source: 'https://github.com/jayisaac0/software_dev_portifolio',
                live: 'https://isaacjoshua.herokuapp.com',
                opensource: false,
                frontend: 'React js',
                backend: 'Node js',
                database: 'dictionary'
            },
            { 
                id: 2,
                image: 'assets/hyreads.png',
                title: 'Hyreads phylosophers community',
                description: 'Hyreads is the easiest way to share papers and initiate interlectual discusions with millions of people across the world. I developed the webapp chat system, discourse section and a custom e-wallet powered by paypal merchant service. Added features include an intergrated automated point and currency converter and book service.',
                source: '',
                live: 'https://powerful-brushlands-25934.herokuapp.com',
                opensource: false,
                frontend: 'React js',
                backend: 'Node js',
                database: 'Postgres'
            },
            { 
                id: 3,
                image: 'https://i.ytimg.com/vi/IPQoMiu6zTI/maxresdefault.jpg',
                title: 'Node js (open source) - SQL restful api with authentication and authorization',
                description: 'This is a rewrite of the mongo restful service api that makes use of mongo database to make use of the SQL technologies like postgres, sqlite and mysql. The api is a CRUDE system that allows registration of users to the database and has got user login and registrations with two admin authorization channels',
                source: 'https://github.com/jayisaac0/mysql_api',
                live: '',
                opensource: true,
                frontend: 'React js',
                backend: 'Node js',
                database: 'Postgres'
            },
            { 
                id: 4,
                image: 'https://miro.medium.com/max/600/0*11eDqY4zA04y2_n6.jpg',
                title: 'Node js (open source) - Mongo restful api with authentication and authorization',
                description: 'I created a restful service api that makes use of mongo database. The api is a CRUDE system that allows registration of users to the database and has got user login and registrations with two admin authorization channels.',
                source: 'https://github.com/jayisaac0/mongo_api',
                live: '',
                opensource: true,
                frontend: 'React js',
                backend: 'Node js',
                database: 'Postgres'
            },
            { 
                id: 5,
                image: 'https://i.ytimg.com/vi/s_ht4AKnWZg/maxresdefault.jpg',
                title: 'Python flask restful api',
                description: 'Comprehensive flask api with authentication and authorization. The api can be used by any database by simply changing the connection string.',
                source: '',
                live: '',
                opensource: true,
                frontend: '',
                backend: 'python',
                database: 'Postgres'
            },
            { 
                id: 6,
                image: 'assets/school.png',
                title: 'K-School system - Diverse school management webapp',
                description: 'This is a diverse school management system built with college and high school being the target audience. It contains an admissions portal, students and staff portal, library portal, finance portal, academics and more.',
                source: 'https://github.com/jayisaac0/PHP-School-management-system',
                live: 'https://k-schoolsystem.herokuapp.com/',
                opensource: false,
                frontend: 'Angular material',
                backend: 'Node js',
                database: 'Mysql'
            },
            { 
                id: 7,
                image: 'assets/homes.png',
                title: 'Gander homes - Diverse school management webapp',
                description: 'This is a diverse school management system built with college and high school being the target audience. It contains an admissions portal, students and staff portal, library portal, finance portal, academics and more.',
                source: '',
                live: 'http://gander.000webhostapp.com/',
                opensource: false,
                frontend: 'Angular material',
                backend: 'Node js',
                database: 'Mysql'
            }
        ]
     }
    render() { 
        return ( 
            <div className="center_content top_margin" style={{padding: "0px !important"}}>

                <List>
                    {this.state.projects.map(project => (
                        <div key={project.id}>
                            <ListItem alignItems="flex-start" className="smdev">
                                <img src={project.image} alt={project.title} style={{width:"350px",padding:"10px"}} />
                                <ListItemText>
                                    <h2>{project.title}</h2>
                                    <p>
                                        {project.description}<br />
                                        <b>
                                            <Chip className="ic_marg" icon={<CodeIcon />} label={project.frontend}   />
                                            <Chip className="ic_marg" icon={<CodeIcon />} label={project.backend}   />
                                            <Chip className="ic_marg" icon={<CodeIcon />} label={project.database}   />
                                        </b>
                                    </p>
                                    {project.opensource === false ? null :
                                        <a href="/">
                                            <Chip label="Open source" clickable color="primary" variant="outlined" />
                                        </a>
                                    }
                                    {project.source === '' ? null :
                                        <a target="_newTab" href={project.source}>
                                            <Chip icon={<GitHubIcon />} label="View source" clickable color="primary" variant="outlined" />
                                        </a>
                                    }
                                    {project.live === '' ? null :
                                        <a target="_newTab" href={project.live}>
                                            <Chip icon={<PublicIcon />} label="View live" clickable color="primary" variant="outlined" />
                                        </a>
                                    }
                                </ListItemText>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </List>
            </div>            
         );
    }
}
 
export default Projects;
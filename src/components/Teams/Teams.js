import React from 'react';
import './Teams.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Teams = (props) => {
    const { strAlternate, strTeam, strSport, strTeamBadge, idTeam, strGender } = props.team;

    // console.log(idTeam)


    return (
        <div className='main-cart'>
            <div className="cart">
                <img src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>
                <p><strong>Sports Type: {strSport}</strong></p>
               
                <br/>
                <Link to={`/team/${idTeam}`}><button className="btn btn-warning ">Explore <FontAwesomeIcon icon={faChevronRight} /></button></Link>
            </div>
        </div>

    );
};

export default Teams;
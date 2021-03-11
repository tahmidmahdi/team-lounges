import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import TeamData from '../TeamData/TeamData';
import './TeamDetails.css'

const TeamDetails = () => {
    //taking team id through useParams()
    const { idTeam } = useParams();

    //search team through id
    const [team, setTeam] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))

    }, [idTeam])
    console.log(team);

    const { strTeamBanner, strTeamBadge } = team;
    console.log('banner', strTeamBanner);


    return (
        <div className="container">
            <div className="team-banner">
                {
                    (strTeamBanner) && <img className="img-fluid"  src={strTeamBanner} alt="" />
                }
                {
                    (strTeamBanner === null) && <img className="img-fluid"  style={{height:'200px'}} src={strTeamBadge} alt="" />
                }
                {/* <img className="bannerLogo" src={strTeamBadge} alt=""/> */}
            </div>


            <div className="team-box d-flex align-items-center">
                <TeamData team={team}></TeamData>
            </div>

        </div>
    );
};

export default TeamDetails;
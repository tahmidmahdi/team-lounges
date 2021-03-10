import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {

    const[teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`)
        .then(res => res.json())
        .then(data => setTeams(data.teams))

    }, [])
    // console.log(teams);
    return (
        <div>
            {
                teams.map(team => <Teams team={team}></Teams>)
            }
        </div>
    );
};

export default Home;
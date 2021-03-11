import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars, } from '@fortawesome/free-solid-svg-icons'

import {   faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

import male from "../../images/Rectangle 28.png"
import female from "../../images/female.png"
import "./TeamData.css"
import SocialMediaError from '../SocialMeadiaError/SocialMediaError';




const TeamData = (props) => {
    const { strTeam, strCountry, intFormedYear, strGender, strSport, strDescriptionEN, strYoutube, strTwitter, strFacebook } = props.team;
    console.log(strFacebook);
    return (

        <div className="team-data">
            <div className="team-details d-flex justify-content-between">

                <div className="club-details">
                    <h2>{strTeam}</h2>
                    <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h6>
                    <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                    <h6><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h6>
                    <h6><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                </div>

                <div className='img'>

                    {
                        (strGender === 'Male') && <img src={male} alt="" />
                    }
                    {
                        (strGender === 'Female') && <img src={female} alt="" />
                    }

                </div>

            </div>

            <p className='details'>{strDescriptionEN}</p>

            <div style={{ textAlign: 'center'}}>
                
                     <a href={`http://${strFacebook}`} target="_blank"> <FontAwesomeIcon  icon={faFacebookSquare } size="3x"  /> </a> 
                
                
                     <a href={`http://${strTwitter}`} target="_blank"> <FontAwesomeIcon  icon={faTwitterSquare } size="3x"  /> </a> 
                
                
                     <a href={`http://${strYoutube}`} target="_blank"> <FontAwesomeIcon  icon={faYoutubeSquare } size="3x"  /> </a> 
               
                
            </div>



        </div>



    );
};

export default TeamData;
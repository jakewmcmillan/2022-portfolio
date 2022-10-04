import React from 'react';

import profilePicture from '../assets/profile-picture.jpg';

export default function Home() {
    return (
        <div class="m-5">
            <h3 className="text-center">Welcome!</h3>
            <p className="text-center">
                I am a Frontend Web Developer with a background in Economics, Finance, and Media.  I earned a certificate in Full Stack Web Development from the University of Pennsylvania’s Coding Boot Camp.  I earned a bachelor’s degree in Applied Economics with a minor in Media & Communications from Ursinus College.  My strengths include working in a team setting, communication, and creativity.
                While at Ursinus College I was a member of the Lacrosse and Rugby teams.  I am a huge sports fan and love the Sixers, Eagles, and Ohio State Football.  My other interests include fantasy football, gaming, hip-hop, Magic: The Gathering, and collecting sneakers.  This is my profile where you can find my resume, browse my portfolio of work, and ways to reach me!  
                I look forward to connecting!
            </p>
            <img className="profile-picture rounded-circle img-fluid" src={profilePicture} alt="Me"></img>
        </div>
    );
}
// OurTeamPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Circle from './Circle'; 
import './OurTeam.css';

const years = [2021, 2022, 2023, 2024,2025];

const OurTeamPage = () => {
  return (
    <div className="team-container">
      {years.map((year) => (
        <Link key={year} to={`/details/${year}`} className='no-link-decoration'>
          <Circle data={year} />
        </Link>
      ))}
    </div>
  );
};

export default OurTeamPage;

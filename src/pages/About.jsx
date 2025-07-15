import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      
      <div className="about-hero">
        <div className="about-hero-dark-overlay"></div>
        <div className="about-hero-overlay">
          <h1>About Dwello</h1>
          <p>Building Dreams, One Home at a Time.</p>
        </div>
      </div>

      <section className="section history-section">
        <h2>Our History</h2>
        <p>
          Founded in 2015 in Bengaluru, Dwello started as a small real estate service aiming to simplify property discovery.
          Over the years, we’ve launched intuitive tools for home seekers, expanded across 5 major cities, and built a strong team that redefined property tech in India.
        </p>
      </section>

      <section className="section mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower individuals by making property renting and buying seamless, transparent, and affordable.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To become India’s most trusted digital real estate platform with a presence in every metropolitan and tier-2 city.
          </p>
        </div>
      </section>

      <section className="section team-section">
        <h2>Meet the Team</h2>
        <div className="team-carousel">
          {[
            {
              name: 'Aarav Mehta',
              role: 'Founder & CEO',
              bio: 'Strategist, visionary, and coffee-fueled leader with over 12 years of experience in real estate tech.',
              img: 'https://randomuser.me/api/portraits/men/75.jpg'
            },
            {
              name: 'Priya Desai',
              role: 'CTO',
              bio: 'Tech wizard who codes dreams into reality. Leads all engineering operations at Dwello.',
              img: 'https://randomuser.me/api/portraits/women/65.jpg'
            },
            {
              name: 'Rohan Gupta',
              role: 'Head of Design',
              bio: 'Creative thinker who ensures Dwello’s interfaces are both elegant and user-friendly.',
              img: 'https://randomuser.me/api/portraits/men/45.jpg'
            },
            {
              name: 'Sana Kapoor',
              role: 'Marketing Director',
              bio: 'The voice behind our brand, building community and reach through powerful campaigns.',
              img: 'https://randomuser.me/api/portraits/women/25.jpg'
            }
          ].map((member, i) => (
            <div key={i} className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;

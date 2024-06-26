import React from 'react';
import './ProfilePage.css';

interface ProfilePageProps {
  bannerLink: string;
  link: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ bannerLink, link }) => {
  return (
    <div>
      <div className="top-third" style={{ backgroundImage: `url(${bannerLink})` }}>
      </div>
      <div className="profile-picture-container">
              <img 
                src={link} 
                alt="Profile" 
                className="profile-picture" 
              />
      </div>
    </div>
  );
};

export default ProfilePage;

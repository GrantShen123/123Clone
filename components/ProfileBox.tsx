import React from 'react';
import './ProfileBox.css';

interface ProfileBoxProps {
  username: string;
  description: string;
  link: string;
  bannerLink: string;
  style?: React.CSSProperties;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ username, description, link, bannerLink, style }) => {
  return (
    <div className="profile-box" style={style}>
      <div className="top-third" style={{ backgroundImage: `url(${bannerLink})` }}>
        <h1></h1>
      </div>
      <div className="bottom-third">
        <div className="profile-info">
          <div className="profile-picture-container">
            <img 
              src={link} 
              alt="Profile" 
              className="profile-picture" 
            />
            <span className="username">{username}</span>
          </div>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;

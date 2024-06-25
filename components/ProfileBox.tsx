import React from 'react';
import './ProfileBox.css';

interface ProfileBoxProps {
  username: string;
  description: string;
  link: string;
  bannerLink: string;
  style?: React.CSSProperties;
  extraInfo: string;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ username, description, link, bannerLink, style, extraInfo }) => {
  return (
    <div className="container">
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
              <div>
                <p className="username">{username}</p>
              </div>
            </div>
            <p className="description">{description}</p>
            <p className="extra-info">{extraInfo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;

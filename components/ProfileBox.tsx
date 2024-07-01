import React from 'react';
import './ProfileBox.css';
import { Button } from './button';

interface ProfileBoxProps {
  username: string;
  description: string;
  link: string;
  bannerLink: string;
  style?: React.CSSProperties;
  extraInfo: string;
  onHover?: () => void;
}

const ProfileBox: React.FC<ProfileBoxProps> = ({ username, description, link, bannerLink, style, extraInfo }) => {
  const handleButtonClick = () => {
    window.location.href = `/${username}`;
  };  
  const handleVerifButtonClick = () => {
    window.location.href = `/${username}/Verif`;
  };
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
            <div className="button-container">
            <Button onClick={handleButtonClick} className="profile-button">View Profile</Button>
            <Button onClick={handleVerifButtonClick} className="verif-button">Verify</Button>
            <p className="extra-info">{extraInfo}</p>
          </div>
        </div>
      </div>
    </div>
    </div>  
  );
};

export default ProfileBox;

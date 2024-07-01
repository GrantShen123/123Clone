import React from 'react';
import './ProfilePage.css';

interface ProfilePageProps {
  bannerLink: string;
  profileLink: string;
  username: string;
  handle: string;
  profileDescription: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ bannerLink, profileLink, username, handle, profileDescription }) => {
  return (
    <div className="profile-page">
      <div className="banner" style={{ backgroundImage: `url(${bannerLink})` }}></div>
      <img src={profileLink} alt="Profile" className="profile-picture" />
      <div className="profile-info">
        <div className="username">{username}</div>
        <div className="handle">@{handle}</div>
        <div className="description">{profileDescription}</div>
      </div>
    </div>
  );
};

export default ProfilePage;

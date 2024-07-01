'use client'
import { useParams } from 'next/navigation';
import ProfilePage from '../../../components/ProfilePage';
import { profiles } from '../../data/profilesData';

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const profile = profiles[username];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <ProfilePage 
      bannerLink={profile.bannerLink} 
      profileLink={profile.profileLink} 
      username={profile.username} 
      handle={profile.handle} 
      profileDescription={profile.profileDescription} 
    />
  );
};

export default Profile;

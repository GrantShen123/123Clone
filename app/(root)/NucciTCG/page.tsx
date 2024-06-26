import React from 'react';
import ProfilePage from './ProfilePage';

const ParentComponent: React.FC = () => {
  const bannerImage = 'https://i.pinimg.com/originals/2b/1d/fe/2b1dfec19b945a19ac39641278a6a799.jpg';

  return (
    <div>
      <ProfilePage 
      bannerLink={'https://i.pinimg.com/originals/2b/1d/fe/2b1dfec19b945a19ac39641278a6a799.jpg'} 
      link = {'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyZX5A8foTpKX4lIjvRevYUK5zjf5I8jagA&s'}
      />

    </div>
  );
};

export default ParentComponent;

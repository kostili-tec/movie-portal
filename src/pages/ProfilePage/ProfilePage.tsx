import React, { useId } from 'react';
import { useAppSelector } from '../../shared/hooks/redux';

const ProfilePage = () => {
  const apiKeyInputId = useId();
  const { login, apikey } = useAppSelector((state) => state.userReducser);
  return (
    <div>
      <h2>{login}</h2>
      <form action="">
        <label htmlFor={apiKeyInputId} />
        <input type="text" id={apiKeyInputId} defaultValue={apikey} />
      </form>
    </div>
  );
};

export default ProfilePage;

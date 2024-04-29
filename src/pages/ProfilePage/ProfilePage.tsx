import React, { useState } from 'react';
import { useAppSelector } from '../../shared/hooks/redux';
import { classNames } from '../../shared/lib/classNames';
import InputText from '../../components/InputText/InputText';
import classes from './ProfilePage.module.scss';
import BugButton from '../../app/providers/ThemeProvider/ErrorBoundary/BugButton';

const ProfilePage = () => {
  const { login, apiKey } = useAppSelector((state) => state.userReducer);
  const [apiState, setApiState] = useState(apiKey);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setApiState(e.target.value);
  return (
    <div className={classNames('page-center')}>
      <h2>{login}</h2>
      <form className={classNames('', {}, [classes.profileForm])} action="">
        <InputText
          label="Api Key"
          name="apikey"
          onChange={handleInputChange}
          type="text"
          defaultValue={apiState}
        />
        <input className="submit" type="submit" value="Change Api Key" />
        <BugButton />
      </form>
    </div>
  );
};

export default ProfilePage;

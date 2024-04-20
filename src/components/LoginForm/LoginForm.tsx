import React, { FC, useId } from 'react';
import classes from './LoginForm.module.scss';
import { classNames } from '../../shared/lib/classNames';

interface SignUpFormProps {
  withApiKey?: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const LoginForm: FC<SignUpFormProps> = ({ handleInputChange, handleSubmit, withApiKey }) => {
  const loginId = useId();
  const passwordId = useId();
  const apiKeyId = useId();

  return (
    <form className={classNames('', {}, [classes.loginForm])} onSubmit={handleSubmit}>
      <div>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" id={passwordId} onChange={handleInputChange} />
      </div>
      {withApiKey && (
        <div>
          <label htmlFor={apiKeyId}>ApiKey</label>
          <input type="text" name="apiKey" id={apiKeyId} onChange={handleInputChange} />
        </div>
      )}
      <input type="submit" value={withApiKey ? 'Sign Up' : 'Login'} />
    </form>
  );
};

export default LoginForm;

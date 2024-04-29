import React, { FC } from 'react';
import classes from './LoginForm.module.scss';
import { classNames } from '../../shared/lib/classNames';
import InputText from '../InputText/InputText';

interface SignUpFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  submitButtonText?: string;
}

const LoginForm: FC<SignUpFormProps> = ({ handleInputChange, handleSubmit, submitButtonText }) => (
  <form className={classNames('', {}, [classes.loginForm])} onSubmit={handleSubmit}>
    <InputText
      label="Login"
      name="login"
      type="text"
      autoComplete="username"
      onChange={handleInputChange}
    />
    <InputText
      label="Password"
      name="password"
      type="password"
      autoComplete="current-password"
      onChange={handleInputChange}
    />
    <input className={classes.submit} type="submit" value={submitButtonText || 'Login'} />
  </form>
);

export default LoginForm;

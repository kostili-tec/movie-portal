import React, { FC } from 'react';
import classes from './LoginForm.module.scss';
import { classNames } from '../../shared/lib/classNames';
import InputText from '../InputText/InputText';
import { FormStateBooleanType } from '../../shared/hooks/useForm';

interface SignUpFormProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  withApiKey?: boolean;
  errorState?: FormStateBooleanType;
}

const LoginForm: FC<SignUpFormProps> = ({ handleInputChange, handleSubmit, withApiKey, errorState }) => (
  <form className={classNames('', {}, [classes.loginForm])} onSubmit={handleSubmit}>
    <InputText
      label="Login"
      name="login"
      type="text"
      autoComplete="username"
      onChange={handleInputChange}
    />
    {errorState && errorState.login && <p className={classes.error}>{errorState.login}</p>}
    <InputText
      label="Password"
      name="password"
      type="password"
      autoComplete="current-password"
      onChange={handleInputChange}
    />

    {withApiKey && (
      <InputText label="ApiKey" name="apiKey" type="text" onChange={handleInputChange} />
    )}
    <input className={classes.submit} type="submit" value={withApiKey ? 'Sign Up' : 'Login'} />
  </form>
);

export default LoginForm;

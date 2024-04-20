import React, { FC } from "react";
import classes from './LoginForm.module.scss';
import { classNames } from "../../shared/lib/classNames";

interface SignUpFormProps {
  withApiKey?: boolean
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const LoginForm: FC<SignUpFormProps> = ({handleInputChange, handleSubmit, withApiKey}) => {
  return (
    <form className={classNames('', {}, [classes.loginForm])} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Login</label>
        <input id="login" name="login" type="text" onChange={handleInputChange}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" onChange={handleInputChange} />
      </div>
      {withApiKey && (
        <div>
          <label htmlFor="apiKey">ApiKey</label>
          <input type="text" name="apiKey" id="apiKey" onChange={handleInputChange}/>
        </div>
      )}
      <input type="submit" value={withApiKey ? 'Sign Up' : 'Login'} />
    </form>
  )
}

export default LoginForm
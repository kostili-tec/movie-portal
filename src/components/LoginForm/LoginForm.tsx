import { FC } from "react";
import classes from './LoginForm.module.scss';
import { classNames } from "../../shared/lib/classNames";

interface SignUpFormProps {
  withApiKey?: boolean
}

const LoginForm: FC<SignUpFormProps> = ({withApiKey}) => {
  return (
    <form className={classNames('', {}, [classes.loginForm])}>
      <div>
        <label htmlFor="login">Login</label>
        <input id="login" type="text"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" />
      </div>
      {withApiKey && (
        <div>
          <label htmlFor="apikey">ApiKey</label>
          <input type="text" id="alikey"/>
        </div>
      )}
      <input type="submit" value={withApiKey ? 'Sign Up' : 'Login'} />
    </form>
  )
}

export default LoginForm
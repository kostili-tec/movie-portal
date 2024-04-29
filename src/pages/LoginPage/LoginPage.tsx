import LoginForm from '../../components/LoginForm/LoginForm';
import useFormState from '../../shared/hooks/useForm';
import { classNames } from '../../shared/lib/classNames';

const LoginPage = () => {
  const { handleInputChange, handleSubmitLogin } = useFormState();
  return (
    <div className={classNames('page-center')}>
      <LoginForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmitLogin}
        submitButtonText="Login"
      />
    </div>
  );
};

export default LoginPage;

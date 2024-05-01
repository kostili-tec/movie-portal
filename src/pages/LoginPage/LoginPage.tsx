import LoginForm from '../../components/LoginForm/LoginForm';
import useFormState from '../../shared/hooks/useForm';
import { classNames } from '../../shared/lib/classNames';

const LoginPage = () => {
  const { handleInputChange, handleSubmitLogin, formState } = useFormState();
  return (
    <div className={classNames('page-center')}>
      <LoginForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmitLogin}
        submitButtonText="Login"
        errorMessage={formState.errorMessage}
      />
    </div>
  );
};

export default LoginPage;

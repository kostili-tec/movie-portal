import LoginForm from '../../components/LoginForm/LoginForm';
import useFormState from '../../shared/hooks/useForm';
import { classNames } from '../../shared/lib/classNames';

const SignUpPage = () => {
  const { handleInputChange, handleSubmitRegister, formState } = useFormState();
  return (
    <div className={classNames('page-center')}>
      <LoginForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmitRegister}
        submitButtonText="Register"
        errorMessage={formState.errorMessage}
      />
    </div>
  );
};

export default SignUpPage;

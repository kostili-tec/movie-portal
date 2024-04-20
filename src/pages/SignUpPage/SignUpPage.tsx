import LoginForm from '../../components/LoginForm/LoginForm';
import useFormState from '../../shared/hooks/useForm';
import { classNames } from '../../shared/lib/classNames';

const SignUpPage = () => {
  const { handleInputChange, handleSubmit } = useFormState();
  return (
    <div className={classNames('page-center')}>
      <LoginForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} withApiKey />
    </div>
  );
};

export default SignUpPage;

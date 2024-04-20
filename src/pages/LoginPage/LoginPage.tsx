import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import useFormState from '../../shared/hooks/useForm';

const LoginPage = () => {
  const { handleInputChange, handleSubmit } = useFormState();
  return (
    <div>
      <LoginForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        withApiKey={false}
      />
    </div>
  );
};

export default LoginPage;

import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import useFormState from '../../shared/hooks/useForm';
import { classNames } from '../../shared/lib/classNames';

const LoginPage = () => {
  const { handleInputChange, handleSubmit, errorState } = useFormState();
  return (
    <div className={classNames('page-center')}>
      <LoginForm
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        withApiKey={false}
        errorState={errorState}
      />
    </div>
  );
};

export default LoginPage;

import { useState } from 'react';
import { useAppDispatch } from './redux';
import { loginUser, registerUser } from '../../store/reducers/ActionsUser';
import { isValidLogin, isValidApiKey, isValidPassword } from '../lib/inputValidation';

interface FormState {
  login: string;
  password: string;
  apiKey: string;
}

interface FormStateBoolean<T> {
  [key: string]: boolean;
}

export type FormStateBooleanType = FormStateBoolean<FormState>;

const initialFormState: FormState = {
  login: '',
  password: '',
  apiKey: '',
};

const useFormState = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [errorState, setErrorState] = useState<FormStateBooleanType>();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormState(initialFormState);
  };

  const validateForm = () => {
    setErrorState((state) => ({
      login: !isValidLogin(formState.login),
      password: !isValidPassword(formState.password),
      apiKey: !isValidApiKey(formState.apiKey),
    }));
    console.log(errorState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { login, password, apiKey } = formState;
    validateForm();
    if (apiKey) {
      dispatch(registerUser(login, password, apiKey));
      console.log('form submitted:', formState);
    } else {
      dispatch(loginUser(login, password));
    }
    resetForm();
  };

  return {
    formState,
    errorState,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};

export default useFormState;

import { useState } from 'react';
import { useAppDispatch } from './redux';
import { loginUser, registerUser } from '../../store/reducers/ActionsUser';
import {
  checkIsAvilableLogin,
  checkIsExistUser,
  isValidLogin,
  isValidPassword,
} from '../lib/validation';

interface FormState {
  login: string;
  password: string;
  errorMessage: string;
}

const initialFormState: FormState = {
  login: '',
  password: '',
  errorMessage: '',
};

const useFormState = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const validateForm = () => isValidLogin(formState.login) && isValidPassword(formState.password);

  const resetForm = () => {
    setFormState(initialFormState);
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { login, password } = formState;
    if (validateForm()) {
      if (checkIsExistUser(login, password)) {
        dispatch(loginUser(login, password));
        resetForm();
      } else {
        setFormState({ ...formState, errorMessage: 'Invalid login or password' });
      }
    } else {
      setFormState((prevFormState) => ({
        ...prevFormState,
        errorMessage: 'Invalid login or password',
      }));
    }
  };

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const { login, password } = formState;
    if (validateForm()) {
      if (checkIsAvilableLogin(login)) {
        dispatch(registerUser(login, password));
        resetForm();
      } else {
        setFormState((prevFormState) => ({
          ...prevFormState,
          errorMessage: 'This login is already taken',
        }));
      }
    } else {
      setFormState((prevFormState) => ({
        ...prevFormState,
        errorMessage: 'Invalid login or password',
      }));
    }
  };

  return {
    formState,
    handleInputChange,
    handleSubmitLogin,
    handleSubmitRegister,
    resetForm,
  };
};

export default useFormState;

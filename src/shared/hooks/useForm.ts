import { useState } from 'react';
import { useAppDispatch } from './redux';
import { loginUser, registerUser } from '../../store/reducers/ActionsUser';

interface FormState {
  login: string;
  password: string;
}

const initialFormState: FormState = {
  login: '',
  password: '',
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

  const resetForm = () => {
    setFormState(initialFormState);
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { login, password } = formState;
    dispatch(loginUser(login, password));
    resetForm();
  };

  const handleSubmitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const { login, password } = formState;
    dispatch(registerUser(login, password));
    resetForm();
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

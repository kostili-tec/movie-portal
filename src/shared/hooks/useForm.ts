import { useState } from 'react';
import { useAppDispatch } from './redux';
import { loginUser, registerUser } from '../../store/reducers/ActionsUser';

interface FormState {
  login: string;
  password: string;
  apiKey: string;
}

const initialFormState: FormState = {
  login: '',
  password: '',
  apiKey: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { login, password, apiKey } = formState;
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
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};

export default useFormState;

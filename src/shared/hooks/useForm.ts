import { useState } from "react";

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
  
  return {
    formState,
    handleInputChange,
    resetForm,
  };
};

export default useFormState;
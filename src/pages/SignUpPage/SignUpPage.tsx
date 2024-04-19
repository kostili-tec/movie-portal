import LoginForm from "../../components/LoginForm/LoginForm";
import useFormState from "../../shared/hooks/useForm";

const SignUpPage = () => {
  const {handleInputChange, handleSubmit} = useFormState();
  return (
    <div>
      <LoginForm handleInputChange={handleInputChange} handleSubmit={handleSubmit} withApiKey={true} />
    </div>
  )
}

export default SignUpPage;
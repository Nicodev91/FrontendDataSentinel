import { useState } from 'react';
import AuthLayout from './AuthLayout';
import LoginHeader from './LoginHeader';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitButton from './SubmitButton';
import RegisterLink from './RegisterLink';
import { useNavigate } from 'react-router-dom';

export default function LoginInterface() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password });
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      {/* Header */}
      <LoginHeader />

      {/* Formulario */}
      <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8 w-full">
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput
          password={password}
          setPassword={setPassword}
        />
        <SubmitButton onClick={handleSubmit} />
      </div>

      {/* Enlaces */}
      <div className="mt-6 sm:mt-8 w-full">
        <RegisterLink />
      </div>
    </AuthLayout>
  );
}

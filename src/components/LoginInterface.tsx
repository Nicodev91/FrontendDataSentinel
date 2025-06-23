import { useState } from 'react';
import BackgroundImage from './Backgroundimage';
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
    navigate('/dashboard'); //Aqui se redirige al dashboard
  };

  return (
    <div className="min-h-screen flex flex-row">
      <div className="w-3/4">
      {/* Aquí estoy el componente BackgroundImage */}
      <BackgroundImage />
      </div>
      {/* Sección derecha con el formulario de login */}
      <div className="w-1/4 flex items-center justify-center px-6 py-12 bg-gray-50">
        <div className="w-full max-w-xs">
        {/* Aquí se aplica el LoginHeader.tsx */}  
        <LoginHeader />

          {/* Formulario */}
          <div className="space-y-6">
            {/* Aquí se aplica el EmailInput.tsx */}
            <EmailInput email={email} setEmail={setEmail} />

            {/* Aquí se aplica el PasswordInput.tsx */}
            <PasswordInput
              password={password}
              setPassword={setPassword}
            />

            {/* Aquí se aplica el SubmitButton.tsx */}q
            <SubmitButton onClick={handleSubmit} />
          </div>

          {/* Aquí se aplica el RegisterLink.tsx */}
          <RegisterLink />


        </div>
      </div>
    </div>
  );
}

import { type MouseEventHandler, useState } from 'react'
import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';
import './AuthForm.css'
import { useModal } from '../../hooks/useModal';

export const AuthForm = () => {
    const [authType, setAuthType] = useState<string>("auth");
    const { isClose } = useModal()

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setAuthType((prevState) =>
      prevState === "register" ? "auth" : "register",
    );
  };
  return (
    <div className='auth-modal'>
      <div className="auth-form">
          <img className='auth-logo' src="/logo-b.png" alt="logo маруси" />
          {authType === "register" ? (<p className="auth-title">Регистрация</p>) : ''}
          {authType === "register" ? <RegisterForm /> : <LoginForm />}
          <button className="auth-button" onClick={handleClick}>
            {authType === "register" ? "У меня есть аккаунт" : "Регистрация"}
          </button>
      </div>
      <button className='auth-modal__button' onClick={isClose}></button>
    </div>
  );
}

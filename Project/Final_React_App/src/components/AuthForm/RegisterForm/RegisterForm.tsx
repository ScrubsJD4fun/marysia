import { FormField } from "../FormField"
import { Button } from "../Button"
import { useRegistrationForm } from "../../../hooks/useRegistrationForm"
import { SvgEmail, SvgName, SvgPass } from "../../../assets"
import './RegisterForm.css'
import { useState } from "react"



export const RegisterForm = () => {
  const { errors, register, registerMutation, submitRegistration } = useRegistrationForm()
  const [ pass1, setPass1] = useState('');
  const [ pass2, setPass2] = useState('');
  const isPasswordsValid = pass1 !== '' && pass2 !== '' && pass1 === pass2;
  return (
    <form className="register-form" onSubmit={submitRegistration}>
      <FormField errorMessage={errors.email?.message}>
        <input autoComplete="off"
        className={errors.email ? 'register-form__invalid' : 'register-form__valid'}
        type="text"
        placeholder="sample@domain.ru"
        {...register('email', {
          required: 'Поле обязательно к заполнению',
          minLength: 8,
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Вы ввели некорректный e-mail'
          }
        })}
        />
        <SvgEmail validate={errors.email ? 'red' : 'black'} />
      </FormField>
      <FormField errorMessage={errors.name?.message}>
        <input autoComplete="off"
        className={errors.name ? 'register-form__invalid' : 'register-form__valid'}
        type="text"
        placeholder="Имя"
        {...register('name', {
          required: 'Поле обязательно к заполнению',
          minLength: 6,
          pattern: {
            value: /^\S*$/,
            message: 'Вы ввели некорректный e-mail'
          }
        })}
        />
        <SvgName validate={errors.name ? 'red' : 'black'} />
      </FormField>
      <FormField errorMessage={errors.surname?.message}>
        <input autoComplete="off"
        className={errors.surname ? 'register-form__invalid' : 'register-form__valid'}
        type="text"
        placeholder="Фамилия"
        {...register('surname', {
          required: 'Поле обязательно к заполнению',
          minLength: 6,
          pattern: {
            value: /^\S*$/,
            message: 'Вы ввели некорректный e-mail'
          }
        })}
        />
        <SvgName validate={errors.surname ? 'red' : 'black'} />
      </FormField>
      <FormField errorMessage={errors.password?.message}>
        <input autoComplete="off"
        className={errors.password ? 'register-form__invalid' : 'register-form__valid'}
        type="password"
        placeholder="Пароль"
        {...register('password', {
          required: 'Поле обязательно к заполнению',
          minLength: 6,
          pattern: {
            value: /^\S*$/,
            message: 'Вы ввели некорректный e-mail'
          }
        })}
        onChange={(e) => setPass1(e.target.value)}
        />
        <SvgPass validate={errors.password ? 'red' : 'black'} />
      </FormField>
      <FormField >
        <input autoComplete="off"
        type="password"
        placeholder="Подтвердите пароль"
        className={isPasswordsValid 
          ? 'register-form__valid' 
          : 'register-form__invalid'}
        onChange={(e) => setPass2(e.target.value)}
        />
        <SvgPass validate="black" />
      </FormField>
      
      <Button title='Зарегистрироваться' isLoading={registerMutation.isPending}>Создать аккаунт</Button>
    </form>
  );
}

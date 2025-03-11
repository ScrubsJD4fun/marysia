import { FormField } from "../FormField";
import { Button } from "../Button";
import { useLoginForm } from "../../../hooks/useLoginForm";
import './LoginForm.css'
import { SvgEmail, SvgPass } from "../../../assets";


export const LoginForm = () => {
    const { submitLogin, errors, register, loginMutation } = useLoginForm()

  return (
    <form className="login-form" onSubmit={submitLogin}>

      <FormField errorMessage={errors.email?.message}>
        <input autoComplete="off"
        className="login-mail"
        type="text"
        placeholder="Электронная почта"
        {...register('email', {
          required: 'Поле обязательно к заполнению',
          minLength: 8,
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Вы ввели некорректный e-mail'
          }
        })}
        />
        <SvgEmail validate="black" />
      </FormField>

      <FormField label="Пароль" errorMessage={errors.password?.message}>
        <input autoComplete="off"
        className="login-pass"
        placeholder="Пароль"
        type="password" 
        {...register('password', {
          required: 'Поле обязательно к заполнению',
          
          minLength: 6,
          pattern: {
            value: /^\S*$/,
            message: 'Вы ввели некорректный e-mail'
          }
        })}
        />
        <SvgPass validate="black" />
      </FormField>
      <Button title='Войти' isLoading={loginMutation.isPending}>Войти</Button>
    </form>
  )
}

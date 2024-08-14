import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

// todo / Controlled form component vs Uncontrolled form component
// todo / Controlled = data is controlled by state
//  todo / Uncontolled = data is controlled by the DOM

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" placeholder="username..." />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="emeil" placeholder="email..." />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" placeholder="password..." />
      </label>
      <button type="submit" className={css.registerFormBtn}>
        Register
      </button>
    </form>
  );
};

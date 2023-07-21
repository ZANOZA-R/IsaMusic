import { useNavigate } from "react-router-dom";
import style from "./login.module.css";

function Login({ setToken }) {
  const navigate = useNavigate();
  const login = () => {
    setToken(true);
    navigate("/main", {replace: true});
  };
  const register = () => {
    navigate("/register", {replace: true});
  }
  return (
    <div className={style.login}>
      <h1 className={style.login__header}>login pages</h1>
      <button onClick={login} className={style.login__button} type="button">
        Вход
      </button>
      <button onClick={register} className={style.login__button} type="button">
        Регистрация
      </button>
    </div>
  );
}
export default Login;

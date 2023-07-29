import { useNavigate } from "react-router-dom";
import style from "./register.module.css";

function Register() {
  const navigate = useNavigate()
  const login = () => {
    navigate("/", {replace: true})
  }
  return (
    <div className={style.register}>
      <h1 className={style.register__header}>register pages</h1>
      <button onClick={login} className={style.register__button} type="button">На страицу логин</button>
      
    </div>
  );
}
export default Register;
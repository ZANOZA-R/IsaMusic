import { useNavigate } from "react-router-dom";
import style from "./notFound.module.css";

function NotFound() {
  const navigate = useNavigate()
  const login = () => {
    navigate("/", {replace: true})
  }
  return (
    <div className={style.notFound}>
      <h1 className={style.notFound__header}>notFound pages</h1>
      <button onClick={login} className={style.notFound__button} type="button">На страицу логин</button>
      
    </div>
  );
}
export default NotFound;
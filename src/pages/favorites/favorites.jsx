import { useNavigate } from "react-router-dom";
import style from "./favorites.module.css";

function Favorites() {
  const navigate = useNavigate()
  const login = () => {
    navigate("/", {replace: true})
  }
  return (
    <div className={style.favorites}>
      <h1 className={style.favorites__header}>favorites pages</h1>
      <button onClick={login} className={style.favorites__button} type="button">На страицу логин</button>
      
    </div>
  );
}
export default Favorites;
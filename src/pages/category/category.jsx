import { useNavigate, useParams } from "react-router-dom";
import style from "./category.module.css";

function Category() {
  const params = useParams();
  const navigate = useNavigate();
  const login = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className={style.category}>
      <h1 className={style.category__header}>category {params.id} pages</h1>
      <button onClick={login} className={style.category__button} type="button">
        На страицу логин
      </button>
    </div>
  );
}
export default Category;

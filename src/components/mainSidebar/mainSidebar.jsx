import { Link } from "react-router-dom";
import playlist01 from "../../img/playlist01.png";
import playlist02 from "../../img/playlist02.png";
import playlist03 from "../../img/playlist03.png";
import Skeleton from "../skeleton";
import style from "./mainSidebar.module.css";

function MainSidebar({ loading }) {
  return (
    <div className={style.main__sidebar}>
      <div className={style.sidebar__personal}>
        <p className={style.sidebar__personalName}>Sergey.Ivanov</p>
        <div className={style.sidebar__avatar} />
      </div>
      {loading ? (
        <div className={style.sidebar__block}>
          <div className={style.sidebar__list}>
            <Skeleton w="250px" h="150px" />
            <Skeleton w="250px" h="150px" />
            <Skeleton w="250px" h="150px" />
          </div>
        </div>
      ) : (
        <div className={style.sidebar__block}>
          <div className={style.sidebar__list}>
            <div className={style.sidebar__item}>
              <Link to="/category/1" className={style.sidebar__link} href="index.html">
                <img
                  className={style.sidebar__img}
                  src={playlist01}
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={style.sidebar__item}>
              <Link to="/category/2" className={style.sidebar__link} href="index.html">
                <img
                  className={style.sidebar__img}
                  src={playlist02}
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={style.sidebar__item}>
              <Link to="/category/3" className={style.sidebar__link} href="index.html">
                <img
                  className={style.sidebar__img}
                  src={playlist03}
                  alt="day's playlist"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainSidebar;

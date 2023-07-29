import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import style from "./mainNav.module.css";

function MainNav() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleVisibility();
    }
  };

  return (
    <nav className={style.main__nav}>
      <div className={style.nav__logo}>
        <img className={style.logo__image} src={logo} alt="logo" />
      </div>
      <div
        onClick={toggleVisibility}
        role="button"
        tabIndex={0}
        onKeyDown={onKeyDown}
        className={style.nav__burger}
      >
        <span className={style.nav__line} />
        <span className={style.nav__line} />
        <span className={style.nav__line} />
      </div>
      {visible && (
        <div className={style.nav__menu}>
          <ul className={style.menu__list}>
            <li className={style.menu__item}>
              <Link to="/main" className={style.menu__link}>Главное</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/favorites" className={style.menu__link}>Мой плейлист</Link>
            </li>
            <li className={style.menu__item}>
              <Link to="/" className={style.menu__link}>Выйти</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MainNav;

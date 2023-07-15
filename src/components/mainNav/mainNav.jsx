import { useState } from "react";
import logo from "../../img/logo.png";
import style from "./mainNav.module.css"

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
        <span className={style.burger__line} />
        <span className={style.burger__line} />
        <span className={style.burger__line} />
      </div>
      {visible && (
        <div className={style.nav__menu}>
          <ul className={style.menu__list}>
            <li className={style.menu__item}>
              <a href="http://" className={style.menu__link}>
                Главное
              </a>
            </li>
            <li className={style.menu__item}>
              <a href="http://" className={style.menu__link}>
                Мой плейлист
              </a>
            </li>
            <li className={style.menu__item}>
              <a href="http://" className={style.menu__link}>
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default MainNav;

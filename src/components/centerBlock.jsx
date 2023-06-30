import "../css/style.css";
import { useState } from "react";
import sprite from "../img/icon/sprite.svg";

const centerblockSearch = (
  <div className="centerblock__search search">
    <svg className="search__svg">
      <use xlinkHref={`${sprite}#icon-search`} />
    </svg>
    <input
      className="search__text"
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </div>
);

const contentTitle = (
  <div className="content__title playlist-title">
    <div className="playlist-title__col col01">Трек</div>
    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
    <div className="playlist-title__col col03">АЛЬБОМ</div>
    <div className="playlist-title__col col04">
      <svg className="playlist-title__svg" alt="time">
        <use xlinkHref={`${sprite}#icon-watch`} />
      </svg>
    </div>
  </div>
);

const playlistItem = (
  <div className="playlist__item">
    <div className="playlist__track track">
      <div className="track__title">
        <div className="track__title-image">
          <svg className="track__title-svg" alt="music">
            <use xlinkHref={`${sprite}#icon-note`} />
          </svg>
        </div>
        <div className="track__title-text">
          <a className="track__title-link" href="index.html">
            Guilt <span className="track__title-span" />
          </a>
        </div>
      </div>
      <div className="track__author">
        <a className="track__author-link" href="index.html">
          Nero
        </a>
      </div>
      <div className="track__album">
        <a className="track__album-link" href="index.html">
          Welcome Reality
        </a>
      </div>
      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref={`${sprite}#icon-like`} />
        </svg>
        <span className="track__time-text">4:44</span>
      </div>
    </div>
  </div>
);

const centerblockContent = (
  <div className="centerblock__content">
    {contentTitle}
    <div className="content__playlist playlist">{playlistItem}</div>
  </div>
);

const performerUl = (
  <div className="filterList">
    <ul className="filterList__ul">
      <li className="filterList__text">Michael Jackson</li>
      <li className="filterList__text">Frank Sinatra</li>
      <li className="filterList__text">Calvin Harris</li>
      <li className="filterList__text">Zhu</li>
      <li className="filterList__text">Arctic Monkeys</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
      <li className="filterList__text">Test</li>
    </ul>
  </div>
);
const yearUl = <div className="filterList filterList__year" />;
const genreUl = (
  <div className="filterList">
    <ul className="filterList__ul">
      <li className="filterList__text">Рок</li>
      <li className="filterList__text">Хип-хоп</li>
      <li className="filterList__text">Поп-музыка</li>
      <li className="filterList__text">Техно</li>
      <li className="filterList__text">Инди</li>
    </ul>
  </div>
);

function CenterBlock() {
  const [filter, setFilter] = useState(0);

  const toggleFilter = (id) => setFilter(filter === id ? 0 : id);
  
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      toggleFilter(1);
    }
  };

  const onKeyDownTwo = (event) => {
    if (event.key === "Enter") {
      toggleFilter(2);
    }
  };

  const onKeyDownThree = (event) => {
    if (event.key === "Enter") {
      toggleFilter(3);
    }
  };

  return (
    <div className="main__centerblock centerblock">
      {centerblockSearch}
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          onClick={() => toggleFilter(1)}
          role="button"
          tabIndex={0}
          onKeyDown={onKeyDown}
          className={`filter__button button-author _btn-text ${filter === 1 ? "active" : null}`}
        >
          исполнителю
        </div>
        <div
          onClick={() => toggleFilter(2)}
          role="button"
          tabIndex={0}
          onKeyDown={onKeyDownTwo}
          className={`filter__button button-year _btn-text ${filter === 2 ? "active" : null}`}
        >
          году выпуска
        </div>
        <div
          onClick={() => toggleFilter(3)}
          role="button"
          tabIndex={0}
          onKeyDown={onKeyDownThree}
          className={`filter__button button-genre _btn-text ${filter === 3 ? "active" : null}`}
        >
          жанру
        </div>
      </div>
      {filter === 1 ? performerUl : null}
      {filter === 2 ? yearUl : null}
      {filter === 3 ? genreUl : null}
      {centerblockContent}
    </div>
  );
}

export default CenterBlock;

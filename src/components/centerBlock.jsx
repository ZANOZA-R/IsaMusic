import "../css/style.css";
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

const centerblockFilter = (
  <div className="centerblock__filter filter">
    <div className="filter__title">Искать по:</div>
    <div className="filter__button button-author _btn-text">исполнителю</div>
    <div className="filter__button button-year _btn-text">году выпуска</div>
    <div className="filter__button button-genre _btn-text">жанру</div>
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
          <a className="track__title-link" href="http://">
            Guilt <span className="track__title-span" />
          </a>
        </div>
      </div>
      <div className="track__author">
        <a className="track__author-link" href="http://">
          Nero
        </a>
      </div>
      <div className="track__album">
        <a className="track__album-link" href="http://">
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

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      {centerblockSearch}
      <h2 className="centerblock__h2">Треки</h2>
      {centerblockFilter}
      {centerblockContent}
    </div>
  );
}

export default CenterBlock;

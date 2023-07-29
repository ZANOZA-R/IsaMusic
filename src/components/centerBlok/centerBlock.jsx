import { useState } from "react";
import sprite from "../../img/icon/sprite.svg";
import style from "./centerBlock.module.css";
import PlayListTrack from "../PlayListTrack/playListTrack";

function CenterBlock({ loading, allTracks, getError, setTrack }) {
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
    <div className={style.main__centerblock}>
      <div className={style.centerblock__search}>
        <svg className={style.search__svg}>
          <use xlinkHref={`${sprite}#icon-search`} />
        </svg>
        <input
          className={style.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={style.centerblock__h2}>Треки</h2>
      <div className={style.centerblock__filter}>
        <div className={style.filter__title}>Искать по:</div>
        <div className={style.filter__box}>
          <div>
            <div
              onClick={() => toggleFilter(1)}
              role="button"
              tabIndex={0}
              onKeyDown={onKeyDown}
              className={
                filter === 1 ? style.filter__buttonActive : style.filter__button
              }
            >
              исполнителю
            </div>
            {filter === 1 ? (
              <div className={style.filterList}>
                <ul className={style.filterList__ul}>
                  <li className={style.filterList__text}>Michael Jackson</li>
                  <li className={style.filterList__text}>Frank Sinatra</li>
                  <li className={style.filterList__text}>Calvin Harris</li>
                  <li className={style.filterList__text}>Zhu</li>
                  <li className={style.filterList__text}>Arctic Monkeys</li>
                </ul>
              </div>
            ) : null}
          </div>
          <div>
            <div
              onClick={() => toggleFilter(2)}
              role="button"
              tabIndex={0}
              onKeyDown={onKeyDownTwo}
              className={
                filter === 2 ? style.filter__buttonActive : style.filter__button
              }
            >
              году выпуска
            </div>
            {filter === 2 ? (
              <div
                className={`${style.filterList} ${style.filterList__year}`}
              />
            ) : null}
          </div>
          <div>
            <div
              onClick={() => toggleFilter(3)}
              role="button"
              tabIndex={0}
              onKeyDown={onKeyDownThree}
              className={
                filter === 3 ? style.filter__buttonActive : style.filter__button
              }
            >
              жанру
            </div>
            {filter === 3 ? (
              <div className={style.filterList}>
                <ul className={style.filterList__ul}>
                  <li className={style.filterList__text}>Рок</li>
                  <li className={style.filterList__text}>Хип-хоп</li>
                  <li className={style.filterList__text}>Поп-музыка</li>
                  <li className={style.filterList__text}>Техно</li>
                  <li className={style.filterList__text}>Инди</li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className={style.centerblock__content}>
        <div className={style.content__title}>
          <div className={`${style.playlistTitle__col} ${style.col01}`}>
            Трек
          </div>
          <div className={`${style.playlistTitle__col} ${style.col02}`}>
            ИСПОЛНИТЕЛЬ
          </div>
          <div className={`${style.playlistTitle__col} ${style.col03}`}>
            АЛЬБОМ
          </div>
          <div className={`${style.playlistTitle__col} ${style.col04}`}>
            <svg className={style.playlistTitle__svg} alt="time">
              <use xlinkHref={`${sprite}#icon-watch`} />
            </svg>
          </div>
        </div>
        <div className={style.content__playlist}>
          <PlayListTrack
            loading={loading}
            allTracks={allTracks}
            getError={getError}
            setTrack={setTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default CenterBlock;

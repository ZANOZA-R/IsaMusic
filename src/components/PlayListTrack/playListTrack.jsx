import style from "./playListTrack.module.css";
import sprite from "../../img/icon/sprite.svg";
import Skeleton from "../skeleton";

function PlayListTrack({ allTracks, getError, loading, setTrack }) {
const getTrack = (track) => {
  setTrack(track)
}

  if (getError) {
    return (
      <div className={style.playlist__item}>
        <h1>{getError}</h1>
      </div>
    );
  }

  return (
    <div className={style.playlist__item}>
      {loading ? (
        <div className={style.playlist__track}>
          <div className={style.track__title}>
            <div className={style.track__titleImage}>
              <Skeleton w="51px" h="51px" />
            </div>
            <div className={style.track__titleText}>
              <Skeleton w="356px" h="19px" />
            </div>
          </div>
          <div className={style.track__author}>
            <Skeleton w="271px" h="19px" />
          </div>
          <div className={style.track__album}>
            <Skeleton w="305px" h="19px" />
          </div>
          <div className={style.track__time}>
            <Skeleton w="60.8px" h="19px" />
          </div>
        </div>
      ) : (
        allTracks.map((track) => (
          <div key={track.id} className={style.playlist__track}>
            <div className={style.track__title}>
              <div className={style.track__titleImage}>
                <svg className={style.track__titleSvg} alt="music">
                  <use xlinkHref={`${sprite}#icon-note`} />
                </svg>
              </div>
              <div className={style.track__titleText}>
                <button type="button" onClick={() => getTrack(track)} className={style.track__titleLink} >
                  {track.name} <span className={style.track__titleSpan} />
                </button>
              </div>
            </div>
            <div className={style.track__author}>
              <button type="button" onClick={() => getTrack(track)} className={style.track__authorLink} >
                {track.author}
              </button>
            </div>
            <div className={style.track__album}>
              <button type="button" onClick={() => getTrack(track)} className={style.track__albumLink} >
                {track.album}
              </button>
            </div>
            <div className={style.track__time}>
              <svg className={style.track__timeSvg} alt="time">
                <use xlinkHref={`${sprite}#icon-like`} />
              </svg>
              <span className={style.track__timeText}>
                {track.duration_in_seconds}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PlayListTrack;

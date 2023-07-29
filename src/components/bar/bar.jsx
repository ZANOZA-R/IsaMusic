import sprite from "../../img/icon/sprite.svg";
import Skeleton from "../skeleton";
import style from "./bar.module.css";

function Bar({ loading, track }) {
  return (
    <div className={style.bar__content}>
      <div className={style.bar__playerProgress} />
      <div className={style.bar__playerBlock}>
        <div className={style.bar__player}>
          <div className={style.player__controls}>
            <div className={style.player__btnPrev}>
              <svg className={style.player__btnPrevSvg} alt="prev">
                <use xlinkHref={`${sprite}#icon-prev`} />
              </svg>
            </div>
            <div className={`${style.player__btnPlay} _btn`}>
              <svg className={style.player__btnPlaySvg} alt="play">
                <use xlinkHref={`${sprite}#icon-play`} />
              </svg>
            </div>
            <div className={style.player__btnNext}>
              <svg className={style.player__btnNextSvg} alt="next">
                <use xlinkHref={`${sprite}#icon-next`} />
              </svg>
            </div>
            <div className={`${style.player__btnRepeat} _btn-icon`}>
              <svg className={style.player__btnRepeatSvg} alt="repeat">
                <use xlinkHref={`${sprite}#icon-repeat`} />
              </svg>
            </div>
            <div className={`${style.player__btnShuffle} _btn-icon`}>
              <svg className={style.player__btnShuffleSvg} alt="shuffle">
                <use xlinkHref={`${sprite}#icon-shuffle`} />
              </svg>
            </div>
          </div>

          <div className={style.player__trackPlay}>
            {loading ? (
              <div className={style.trackPlay__contain}>
                <div className={style.trackPlay__image}>
                  <Skeleton w="51px" h="51px" />
                </div>
                <div className={style.trackPlay__author}>
                  <Skeleton w="59px" h="15px" />
                </div>
                <div className={style.trackPlay__album}>
                  <Skeleton w="59px" h="15px" />
                </div>
              </div>
            ) : (
              <div className={style.trackPlay__contain}>
                <div className={style.trackPlay__image}>
                  <svg className={style.trackPlay__svg} alt="music">
                    <use xlinkHref={`${sprite}#icon-note`} />
                  </svg>
                </div>
                <div className={style.trackPlay__author}>
                  <a className={style.trackPlay__authorLink} href="index.html">
                    {track.name}
                  </a>
                </div>
                <div className={style.trackPlay__album}>
                  <a className={style.trackPlay__albumLink} href="index.html">
                    {track.author}
                  </a>
                </div>
              </div>
            )}

            <div className={style.trackPlay__likeDis}>
              <div className={`${style.trackPlay__like} _btn-icon`}>
                <svg className={style.trackPlay__likeSvg} alt="like">
                  <use xlinkHref={`${sprite}#icon-like`} />
                </svg>
              </div>
              <div className={`${style.trackPlay__dislike}_btn-icon`}>
                <svg className={style.trackPlay__dislikeSvg} alt="dislike">
                  <use xlinkHref={`${sprite}#icon-dislike`} />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bar__volumeBlock}>
          <div className={style.volume__content}>
            <div className={style.volume__image}>
              <svg className={style.volume__svg} alt="volume">
                <use xlinkHref={`${sprite}#icon-volume`} />
              </svg>
            </div>
            <div className={`${style.volume__progress} _btn`}>
              <input
                className={`${style.volume__progressLine} _btn`}
                type="range"
                name="range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bar;

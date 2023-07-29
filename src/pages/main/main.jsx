import { useEffect, useState } from "react";
import MainNav from "../../components/mainNav/mainNav";
import CenterBlock from "../../components/centerBlok/centerBlock";
import MainSidebar from "../../components/mainSidebar/mainSidebar";
import Bar from "../../components/bar/bar";
import style from "./main.module.css";
import getTracksAll from "../../api/api";

function Main() {
  const [loading, setLoading] = useState(true);
  const [allTracks, setAllTracks] = useState(null);
  const [getError, setGetError] = useState(null);
  const [track, setTrack] = useState(null);

  const asyncGetTracksAll = async () => {
    try {
      const response = await getTracksAll();
      setAllTracks(response);
    } catch (error) {
      setGetError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    asyncGetTracksAll();
  }, []);

  return (
    <div className={style.container}>
      <main className={style.main}>
        <MainNav />
        <CenterBlock
          allTracks={allTracks}
          getError={getError}
          loading={loading}
          setTrack={setTrack}
        />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        {track ? <Bar loading={loading} track={track} /> : null}
      </div>
    </div>
  );
}
export default Main;

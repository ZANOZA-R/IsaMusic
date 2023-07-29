import { useEffect, useState } from "react";
import MainNav from "../../components/mainNav/mainNav";
import CenterBlock from "../../components/centerBlok/centerBlock";
import MainSidebar from "../../components/mainSidebar/mainSidebar";
import Bar from "../../components/bar/bar";
import style from "./main.module.css";

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div className={style.container}>
      <main className={style.main}>
        <MainNav />
        <CenterBlock loading={loading} />
        <MainSidebar loading={loading} />
      </main>
      <div className={style.bar}>
        <Bar loading={loading} />
      </div>
    </div>
  );
}
export default Main;

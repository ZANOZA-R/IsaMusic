import { useEffect, useState } from "react";
import MainNav from "./mainNav/mainNav";
import CenterBlock from "./centerBlok/centerBlock";
import MainSidebar from "./mainSidebar/mainSidebar";
import Bar from "./bar/bar";
import style from "./app.module.css";

function App() {
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

export default App;

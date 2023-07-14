import "../css/style.css";
import { useEffect, useState } from "react";
import MainNav from "./mainNav";
import CenterBlock from "./centerBlock";
import MainSidebar from "./mainSidebar/mainSidebar";
import Bar from "./bar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className="container">
      <main className="main">
        <MainNav />
        <CenterBlock loading={loading} />
        <MainSidebar loading={loading} />
      </main>
      <div className="bar">
        <Bar loading={loading} />
      </div>
      <footer className="footer" />
    </div>
  );
}

export default App;

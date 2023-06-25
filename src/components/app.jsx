import "../css/style.css";
import MainNav from "./mainNav";
import CenterBlock from "./centerBlock";
import MainSidebar from "./mainSidebar";
import Bar from "./bar";

function App() {
  return (
    <div className="container">
      <main className="main">
        <MainNav />
        <CenterBlock />
        <MainSidebar />
      </main>
      <div className="bar">
        <Bar />
      </div>
      <footer className="footer" />
    </div>
  );
}

export default App;

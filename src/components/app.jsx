import { useState } from "react";
import AppRoutes from "./appRoutes/appRoutes";

function App() {
  const [token, setToken] = useState(false)

  return <AppRoutes token={token} setToken={setToken}/>;
}

export default App;

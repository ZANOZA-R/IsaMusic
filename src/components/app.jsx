import { useState } from "react";
import AppRoutes from "./routes/routes";

function App() {
  const [token, setToken] = useState(false)

  return <AppRoutes token={token} setToken={setToken}/>;
}

export default App;

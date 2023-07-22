import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/login";
import Main from "../../pages/main/main";
import Register from "../../pages/register/register";
import Favorites from "../../pages/favorites/favorites";
import Category from "../../pages/category/category";
import NotFound from "../../pages/notFound/notfound";
import ProtectedRoute from "../protectedRoute/protectedRoute";

function AppRoutes({ token, setToken }) {
  return (
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute token={token} />}>
        <Route path="/main" element={<Main />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<Category />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

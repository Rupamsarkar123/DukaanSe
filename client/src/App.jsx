import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard"; // Import AdminDashboard
import CreateCategory from "./pages/Admin/CreateCategory"; // Import CreateCategory
import CreateProduct from "./pages/Admin/CreateProduct"; // Import CreateProduct
import Products from "./pages/Admin/Products"; // product list
import UpdateProduct from "./pages/Admin/UpdateProduct"; // Import CreateProduct
import Users from "./pages/Admin/Users"; // import users all
import AdminOrders from "./pages/Admin/AdminOrders";
import RouteChangeLoader from "./RouteChangeLoader"; // Add this import
import Orders from "./pages/user/Orders"; // Import Orders
import Profile from "./pages/user/Profile"; // Import Profile
import { useAuth } from "./context/auth";
import { Navigate } from "react-router-dom"; // To restrict unauthorized access
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";

function App() {
  const [auth] = useAuth();

  return (
    <>
      <RouteChangeLoader>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:slug" element={<CategoryProduct />} />

          {/* User Dashboard */}
          <Route
            path="/dashboard"
            element={
              auth?.user?.role === 1 ? <AdminDashboard /> : <Dashboard />
            }
          />
          {/* User Routes (Only accessible if NOT admin) */}
          {auth?.user?.role !== 1 && (
            <>
              <Route path="/dashboard/user/profile" element={<Profile />} />
              <Route path="/dashboard/user/orders" element={<Orders />} />
            </>
          )}

          {/* Admin Routes (Accessible only by Admins) */}
          {auth?.user?.role === 1 && (
            <>
              <Route
                path="/dashboard/admin/create-category"
                element={<CreateCategory />}
              />
              <Route
                path="/dashboard/admin/create-product"
                element={<CreateProduct />}
              />
              <Route
                path="/dashboard/admin/product/:slug"
                element={<UpdateProduct />}
              />
              <Route path="/dashboard/admin/products" element={<Products />} />
              <Route path="/dashboard/admin/users" element={<Users />} />
              <Route path="/dashboard/admin/orders" element={<AdminOrders />} />
            </>
          )}

          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </RouteChangeLoader>
    </>
  );
}

export default App;

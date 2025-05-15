import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import SearchInput from "./Form/SearchInput";
import useCategory from "../hooks/useCategory";
import { useCart } from "../context/cart";
import { Badge } from "antd";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          {/* Navbar Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            {/* Logo and Brand Name - Aligned in One Row */}
            <Link
              to="/"
              className="navbar-brand custom-brand"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "black",
                textDecoration: "none",
              }}
            >
              <img
                src="/Dukaan.svg"
                alt="DukaanSe Logo"
                width="40"
                height="40"
              />
              <span>DukaanSe..</span>
            </Link>

            {/* Navbar Items - Aligned to Right */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput />
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      href="#"
                      style={{ textDecoration: "none" }}
                      onMouseDown={(e) =>
                        (e.currentTarget.style.textDecoration = "underline")
                      }
                      onMouseUp={(e) =>
                        setTimeout(
                          () => (e.currentTarget.style.textDecoration = "none"),
                          200
                        )
                      }
                    >
                      {auth?.user?.name}
                    </a>

                    <ul className="dropdown-menu">
                      <li>
                        <NavLink to="/dashboard" className="dropdown-item">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item d-flex align-items-center">
                <Badge count={cart?.length} showZero offset={[5, 0]}>
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    style={{
                      fontSize: "1rem",
                      fontWeight: "400",
                      padding: "8px 12px",
                      color: "rgba(0, 0, 0, 0.55)",
                      textDecoration: "none",
                    }}
                  >
                    Cart
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout";

const Categories = () => {
  const categories = useCategory();

  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div
                className="card d-flex justify-content-center align-items-center"
                style={{
                  height: "80px",
                  width: "100%",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <Link
                  to={`/category/${c.slug}`}
                  className="btn cat-btn"
                  style={{
                    fontWeight: "600",
                    fontSize: "18px",
                    transition: "0.3s",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.5rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#007BFF")
                  }
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                >
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;

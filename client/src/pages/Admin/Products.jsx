import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import AdminMenu from "../../components/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadProducts = async (pageNo = 1) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/product/product-list/${pageNo}`
      );
      if (data?.products?.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadProducts(nextPage);
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products List</h1>
          <div className="row">
            {products?.map((p) => (
              <div key={p._id} className="col-md-3 mb-4">
                <Link
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link text-decoration-none"
                >
                  <div className="card h-100">
                    <img
                      src={`${BASE_URL}/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text text-truncate">{p.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {hasMore && (
            <div className="text-center mt-3">
              <button
                className="btn btn-primary"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Products;

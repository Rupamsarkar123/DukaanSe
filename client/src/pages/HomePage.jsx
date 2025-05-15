import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import "../styles/Homepage.css";
import { BASE_URL } from "../config";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get all categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  // Get total product count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/product/product-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  // Get all products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${BASE_URL}/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Filter category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // Filtered products
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${BASE_URL}/product/product-filters`, {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

 return (
    <Layout title={"All Products - Best offers"}>
      <div className="container-fluid mt-3 home-page">
        <div className="row">
          {/* Sidebar */}
          {/* Filters Section */}
          <div className="col-md-2">
            {/* ✅ Mobile Collapsible Filters */}
            <div className="d-block d-md-none">
              {/* Category Toggle */}
              <button
                className="btn btn-outline-primary w-100 mb-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobileCategoryFilter"
                aria-expanded="false"
                aria-controls="mobileCategoryFilter"
              >
                Filter by Category
              </button>
              <div className="collapse mb-3" id="mobileCategoryFilter">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>

              {/* Price Toggle */}
              <button
                className="btn btn-outline-primary w-100 mb-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mobilePriceFilter"
                aria-expanded="false"
                aria-controls="mobilePriceFilter"
              >
                Filter by Price
              </button>
              <div className="collapse mb-3" id="mobilePriceFilter">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>

              {/* Reset Button (Mobile) */}
              <button
                className="btn btn-black w-100 mt-2"
                onClick={() => window.location.reload()}
              >
                RESET FILTERS
              </button>
            </div>

            {/* ✅ Desktop Always-visible Filters */}
            <div className="d-none d-md-block">
              <h4 className="text-center">Filter By Category</h4>
              <div className="d-flex flex-column">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>

              <h4 className="text-center mt-4">Filter By Price</h4>
              <div className="d-flex flex-column">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>

              <div className="d-flex flex-column mt-3">
                <button
                  className="btn btn-black"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTERS
                </button>
              </div>
            </div>
          </div>

          {/* Product Section */}
          <div className="col-md-10">
            <h1 className="text-center">All Products</h1>
            <div className="d-flex flex-wrap justify-content-start">
              {products?.map((p) => (
                <div
                  className="card m-2"
                  style={{ width: "100%", maxWidth: "18rem" }}
                  key={p._id}
                >
                  <img
                    src={`${BASE_URL}/product/product-photo/${p._id}`} // ✅ Clean image URL
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                    </div>
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load more */}
            <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn loadmore"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ..." : "Loadmore"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;


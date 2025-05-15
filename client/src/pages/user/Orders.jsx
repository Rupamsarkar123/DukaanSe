import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import UserMenu from "../../components/UserMenu";
import axios from "axios";
import moment from "moment";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import { BASE_URL } from "../../config";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/orders`, {
        headers: {
          Authorization: auth?.token,
        },
      });
      setOrders(data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Failed to fetch orders. Please try again.");
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title="Your Orders">
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center mb-4">Your Orders</h1>

            {orders?.length === 0 ? (
              <p className="text-center">No orders found.</p>
            ) : (
              orders.map((order, index) => (
                <div className="border shadow mb-4 p-3" key={order._id}>
                  <h5>Order #{index + 1}</h5>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Buyer</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Items</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{order?.status}</td>
                        <td>{order?.buyer?.name}</td>
                        <td>{moment(order?.createdAt).fromNow()}</td>
                        <td>
                          {order?.payment?.success ? "Success" : "Failed"}
                        </td>
                        <td>{order?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="container">
                    {order?.products?.map((product) => (
                      <div
                        className="row mb-3 p-2 card flex-row align-items-center"
                        key={product._id || index}
                      >
                        <div className="col-md-4">
                          <img
                            src={`${BASE_URL}/product/product-photo/${product._id}`}
                            alt={product.name}
                            className="img-fluid rounded"
                            width="100"
                            height="100"
                          />
                        </div>
                        <div className="col-md-8">
                          <h6>{product.name}</h6>
                          <p>{product.description?.substring(0, 60)}...</p>
                          <p className="text-primary fw-bold">
                            ₹{product.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;

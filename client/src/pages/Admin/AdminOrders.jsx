import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/AdminMenu";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
import { BASE_URL } from "../../config";
const { Option } = Select;

const AdminOrders = () => {
  const [status] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered", // fixed typo from "deliverd"
    "Cancel", // fixed typo from "cancel"
  ]);
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  // Fetch all orders
  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/all-orders`);
      if (data?.orders) {
        setOrders(data.orders);
      } else {
        toast.error("Failed to fetch orders.");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Something went wrong while fetching orders.");
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  // Handle status change
  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `${BASE_URL}/auth/order-status/${orderId}`,
        { status: value }
      );
      if (data?.success) {
        toast.success("Order status updated successfully.");
        getOrders(); // Refresh orders after update
      } else {
        toast.error("Failed to update order status.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Something went wrong while updating status.");
    }
  };

  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>

          {orders?.length === 0 && (
            <p className="text-center">No orders found.</p>
          )}

          {orders?.map((o, i) => (
            <div className="border shadow mb-4 p-3" key={o._id}>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Status</th>
                    <th>Buyer</th>
                    <th>Date</th>
                    <th>Payment</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <Select
                        bordered={false}
                        onChange={(value) => handleChange(o._id, value)}
                        defaultValue={o?.status}
                        style={{ width: 150 }}
                      >
                        {status.map((s, index) => (
                          <Option key={index} value={s}>
                            {s}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td>{o?.buyer?.name || "N/A"}</td>
                    <td>{moment(o?.createdAt).fromNow()}</td>
                    <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                    <td>{o?.products?.length}</td>
                  </tr>
                </tbody>
              </table>

              <div className="container">
                {o?.products?.map((p) => (
                  <div className="row mb-2 p-3 card flex-row" key={p._id}>
                    <div className="col-md-4">
                      <img
                        src={`${BASE_URL}/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                        width="100px"
                        height="100px"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="fw-bold">{p.name}</p>
                      <p>{p.description?.substring(0, 30)}...</p>
                      <p>Price: ₹{p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;

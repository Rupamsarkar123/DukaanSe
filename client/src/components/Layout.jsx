import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

const Layout = ({
  children,
  title = "Dukaan - shop now",
  description = "mern stack app",
  keywords = "mern, react, node, mongodb",
  author = "Rupam",
}) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

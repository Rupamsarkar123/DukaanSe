import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./components/Loader";

const RouteChangeLoader = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // 1.5 seconds

    return () => clearTimeout(timer);
  }, [location]);

  return <>{loading ? <Loader /> : children}</>;
};

export default RouteChangeLoader;

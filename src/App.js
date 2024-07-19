import React, { useEffect, useState } from "react";
import Loading from "./Components/Loading/Index.js";
import AppRoutes from "./AppRoutes";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return <AppRoutes />;
};

export default App;

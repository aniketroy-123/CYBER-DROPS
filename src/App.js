import AppRoutes from "./AppRoutes";
import { useState, useEffect } from "react";
import Loader from "../src/components/common/Loader";
function App() {
  const [loading, setLoading] = useState(true);

  // FOR FULL SCREEN LOADING
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return <>{loading ? <Loader /> : <AppRoutes />}</>;
}

export default App;

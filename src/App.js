import AppRoutes from "./AppRoutes";
import { useState, useEffect } from "react";
import Loader from "../src/components/common/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({ once: true });
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

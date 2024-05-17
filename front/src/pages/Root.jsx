import "../css/style.css";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root({ cartCount }) {
  return (
    <div>
      <Header cartCount={cartCount} />
      <Outlet />
      <Footer />
    </div>
  );
}

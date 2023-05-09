import "./App.css";
import Header from "./component/Navigation/header.component";
import Home from "./component/pages/Home";
import CategoryPage from "./component/pages/Categorys/CategoryPage/CategoryPage";
import CardDetails from "./component/Cards/CardDetails/CardDetails";
import { Route, Routes } from "react-router-dom";
import CartMenu from "./component/Navigation/CartItems/CartMenu";
import Checkout from "./component/pages/Checkout/Checkout";
import ProgressCheck from "./component/pages/Checkout/ProgressCheck/ProgressCheck";
import AllProducts from "./component/pages/allProducts/AllProducts";
import Footer from "./component/pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:name" element={<CategoryPage />} />
        <Route path="/categories/:name/:id" element={<CardDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/progressCheckout" element={<ProgressCheck />} />
        <Route path="/allProducts" element={<AllProducts />} />
      </Routes>
      <CartMenu />
      <Footer />
    </div>
  );
}

export default App;

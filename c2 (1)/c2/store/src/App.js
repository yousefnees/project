import "./App.css";
// import ProductPage from "./Component/ProductPage";
import HomePage from "./Component/HomePage";
import Footer from "./Component/Footer";
import { Routes, Route, Link } from "react-router-dom";
import AddProdect from "./Component/AddProdect";
import Category1 from "./Component/Category1";
import Category2 from "./Component/Category2";
import Category3 from "./Component/Category3";
import ProductPage from "./Component/ProductPage";
import Viewitem from "./Component/Viewitem";
import EditP from "./Component/EditP";
import UpdateProduct from "./Component/UpdateProduct";
import SeeAllProduct from "./Component/SeeAllProduct";

function HomePage8() {
  return (
    <div className="home">
      <HomePage />
      <ProductPage />
      <AddNewProductPage />
    </div>
  );
}
function ViewitemPage() {
  return (
    <div>
      <Viewitem />
    </div>
  );
}
function AddProductPage() {
  return (
    <div>
      <AddProdect />
    </div>
  );
}

function EditPage() {
  return (
    <div>
      <EditP />
    </div>
  );
}
function UpdatePage() {
  return (
    <div>
      <UpdateProduct />
    </div>
  );
}

function AddNewProductPage() {
  return (
    <div className="add_new_product_page">
      <Link to="/addProduct">
        <button>add new product</button>
      </Link>
    </div>
  );
}
function seeAllProducts() {
  return (
    <div>
      <seeAllProducts />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage8 />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/product1" element={<Category1 />} />
        <Route path="/product2" element={<Category2 />} />
        <Route path="/product3" element={<Category3 />} />
        <Route path="/AllProduct" element={<SeeAllProduct />} />
        <Route path="/viewitem" element={<ViewitemPage />} />
        <Route path="/updateitem" element={<UpdatePage />} />
      </Routes>
      <Footer />
      {/* <ProductPage/> */}
    </div>
  );
}
export default App;

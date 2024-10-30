// src/App.jsx
import { ProductProvider } from "./components/productContext/ContextApi";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <ProductProvider>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </ProductProvider>
  );
}

export default App;

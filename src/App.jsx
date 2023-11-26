import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Header from "./components/Header";
import Test from "./pages/Test";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} index />
        <Route  path="/test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return <div>
    <Routes>
      <Route path="/" element={ <Product/> } index />
    </Routes>
  </div>;
}

export default App;

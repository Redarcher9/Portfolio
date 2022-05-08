import { Routes, Route} from "react-router-dom";
import {Home,Work,Blog} from "./routes";
import {Navbar,Footer} from "./components/index";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="work" element={<Work />}/>
        <Route path="blog" element={<Blog />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

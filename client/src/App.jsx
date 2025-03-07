import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Register from "./Component/Register";
import Edit from "./Component/edit";
import Detail from "./Component/Detail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page pe Navbar ke saath dikhega */}
        <Route exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />

        {/* Register page pe sirf blank page + Register text hoga */}
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id"  element={<Detail />}/>
        

      </Routes>
    </Router>
  );
}

export default App;

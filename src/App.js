import "./App.css";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen.js";
import ProductScreen from "./Screens/ProductScreen.js";

function App() {
  return (
    <Router>
      <>
        <div className="grid-container">
          <Header />
          <Aside />
          <main className="main">
            <div className="content">
              <Routes>
                <Route exact={true} path="/" element={<HomeScreen />} />
                <Route path="/product/:id" element={<ProductScreen />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;

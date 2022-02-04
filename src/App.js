import "./App.css";

import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="grid-container">
        <Header />
        <Aside />
        <main className="main">
          <div className="content">
            <ul className="products">
              {data.products.map((product) => (
                <li>
                  <div className="product">
                    <img
                      className="product-image"
                      src={product.image}
                      alt="GT_Cut"
                    />
                    <div className="product-name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">
                      {product.rating} Stars ({product.numReviews} reviews)
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

import React from "react";

import { useParams } from "react-router-dom";

import data from "../data";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button } from "react-bootstrap";

import { Link } from "react-router-dom";

const ProductScreen = (props) => {
  let { id } = useParams();
  const product = data.products.find((x) => x._id === id);
  return (
    <div>
      <div>
        <Button className="btn btn-warning">
          <Link className="button" to="/">
            Back to result
          </Link>
        </Button>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} width="500" alt="shoes"></img>
        </div>

        <div className="details-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Stars ({product.numReviews} Reviews)
            </li>
            <li>
              <b>{product.price}</b>
            </li>
            <li>
              description
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;

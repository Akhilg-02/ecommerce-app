import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproductsData, getsingleproductreq } from "../Redux/actions";

export const Products = () => {
  // to get all products list on component mounts
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products[0]);
  console.log(data);

  function fectData() {
    axios
      .get("https://movie-fake-server.herokuapp.com/products")
      .then((res) => {
        console.log(res.data);
        setList(res.data);
        dispatch(getproductsData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    fectData();
    //dispatch(getproductsData())
  }, []);


  // ************************************************
  // handle product detail click
  // ************************************************

  const handleDetailClick = (id) => {
    // console.log(id)
    dispatch(getsingleproductreq(id))
    navigate(`/products/${id}`)
  }

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list container">
        {/* map throught th products  list and display the results */}

        <div className="container">
          <div className="row">
            {list.map((el, i) => {
              return (
                <div className="col-lg-4 col-md-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={el.image} className="card-img-top" alt="dumy" />
                    <div class="card-body">
                      <h5 class="card-title">{el.title}</h5>
                      <p class="card-text">{el.brand}</p>
                      <p class="card-text">{el.price}</p>
                      <button type="button" class="btn btn-primary" onClick={() => handleDetailClick(el.id)}>
                        Product Detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

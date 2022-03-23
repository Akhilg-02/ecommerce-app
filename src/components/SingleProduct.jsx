import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const SingleProductList = () => {
  // const {id} = useParams();
  const product = useSelector((state) => state.singleProduct);
  console.log(product[0])

    // make a request to get the details
  return (
    <div className="container bg-secondary">
      <div className="row">
        {product[0].map((item,i)=>{
          return(
            <>
            <div className="col-lg-5 ">
              <img src={item.image} className="img-fluid" alt="product img" />
              
            </div>

            <div className="col-lg-5">
              <h2>Title: {item.title}</h2>
              <h3>Brand: {item.brand}</h3>
              <h3>Price: {item.price}</h3>
            </div>
            </>
          )
        })}

      </div>
    </div>
  )
};

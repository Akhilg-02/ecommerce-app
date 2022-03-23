import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Products",
    link: "/products"
  }
  //   add the other link as well
];
export const Navbar = () => {
  return (
    <div>
      {/* {
        links.map((el,index)=>{
          return(
            <Link key={index} to={el.link}>{el.title}</Link>
          )
        })
 
      } */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">AK</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

            {
              links.map((el,index)=>{
                return(
                  <li className="nav-item" key={index}>
                    <Link className="nav-link active" aria-current="page" to={el.link}>{el.title}</Link>
                  </li>
                  // <Link key={index} to={el.link}></Link>
                )
              })
      
            }
          
            </ul>
          </div>
        </div>
      </nav>
    </div>
    
   )    
  
    

  
};

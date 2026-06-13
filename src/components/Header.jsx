import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-blue-400 p-2 flex  justify-between items-center ">
        {/* <div className="text-primary h1 fw-bold">My Compony</div> */}
        <Link to={"/"} className="text-blue-400 text-4xl font-bold"><img src=".//assets/logo.png" alt="logo" /></Link>

        <div className="flex gap-4">
         {/* <Link to={"/"}>Home</Link>
         <Link to={"/about"}>ABOUT</Link>
         <Link to={"/product"}>PRODUCT</Link>
         <Link to={"/contact-us"}>CONTACT US</Link> */}
        </div>
        <div className="flex gap-3">
          {/* <Link to={"/login"}><button className="btn btn-outline-primary">Login</button></Link>
          <Link to={"/regester"}><button className="btn btn-primary">Regester</button></Link> */}
        </div>
      </div>
    </>
  );
}
export default Header;

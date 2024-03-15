import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
 

  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <Link to={"/"} className={location.pathname === "/" ? "font-bold" : ""}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          <Link to={"/cart"} className={location.pathname === "/cart" ? "font-bold" : ""}>
            <li className="cursor-pointer">Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

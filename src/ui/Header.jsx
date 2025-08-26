import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
function Header() {
  return (
    <div>
      <Link path="/">Fast Pizza</Link>
      <p>Sherpa</p>
      <SearchOrder />
    </div>
  );
}

export default Header;

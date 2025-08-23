import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
//AppLayout is global layout of the entire application and parent of all other routes
function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;

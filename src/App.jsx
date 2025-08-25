//React version 6 introduced a completely new approach to defining routes and working with React Router.
// in React Router version 6.4 and above, to use the new powerful APIs like data loaders, data actions, or data features, we have to this new way.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import { default as Menu, loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  //AppLayout is the parent of all other routes.
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // / Connecting the Loader to the Route
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

// App component //
function App() {
  return <RouterProvider router={router} />;
}

export default App;

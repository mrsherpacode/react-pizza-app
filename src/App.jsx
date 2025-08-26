//React version 6 introduced a completely new approach to defining routes and working with React Router.
// in React Router version 6.4 and above, to use the new powerful APIs like data loaders, data actions, or data features, we have to this new way.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import { default as Menu, loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";
import CreateOrder from "./features/order/CreateOrder";
import Order, { loader as OrderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  //AppLayout is the parent of all other routes.
  {
    element: <AppLayout />,
    // error element in the parent route because errors that happen in nested routes bubble up to the parent route.
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // Connecting the Loader to the Route
        loader: menuLoader,
        // Error message if something goes wrong
        errorElement: <Error />,
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
        loader: OrderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

// App component //
function App() {
  return <RouterProvider router={router} />;
}

export default App;

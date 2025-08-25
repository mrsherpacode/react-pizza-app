import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // The useLoaderData hook allows components to access data loaded by their route's loader function.
  // The loader uses the render-as-you-fetch strategy, not fetch-on-render
  //  Modern React Router data loading
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
//getMenu is from services/apiRestaurant.js file that gets menu data from API.
export async function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;

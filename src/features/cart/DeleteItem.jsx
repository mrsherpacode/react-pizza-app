import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
//  creating a reusable delete button
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button typeOf="base" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;

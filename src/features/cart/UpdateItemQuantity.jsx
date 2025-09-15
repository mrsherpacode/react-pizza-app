import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseQuantity, increaseQuantity } from "./cartSlice";
// reuseable update button
function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        typeOf="round"
        onClick={() => dispatch(decreaseQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="font-sm font-semibold">{currentQuantity} </span>
      <Button
        typeOf="round"
        onClick={() => dispatch(increaseQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;

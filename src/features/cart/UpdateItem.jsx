import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItem = ({ pizzaId, itemQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-3">
      <button
        className="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
      <p className="text-sm font-medium">{itemQuantity}</p>
      <button
        className="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>
    </div>
  );
};

export default UpdateItem;

import { useDispatch } from "react-redux";
import { deletItem } from "./cartSlice";

const DeletItem = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <button className="small" onClick={() => dispatch(deletItem(pizzaId))}>
      Delete
    </button>
  );
};

export default DeletItem;

import { useSelector } from "react-redux";
import DeletItem from "./DeletItem";
import UpdateItem from "./UpdateItem";
import { getCurrentQuantityById } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const { pizzaId, quantity, name, totalPrice } = item;
  const itemQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className=" py-3 sm:flex sm:it sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity} &times;{name}{" "}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItem pizzaId={pizzaId} itemQuantity={itemQuantity} />
        <DeletItem pizzaId={pizzaId} />
      </div>
    </li>
  );
};

export default CartItem;

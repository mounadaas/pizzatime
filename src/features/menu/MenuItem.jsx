import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeletItem from "../cart/DeletItem";
import UpdateItem from "../cart/UpdateItem";
import { formatCurrency } from "../../utils/helpers";

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, imageUrl, soldOut, ingredients } = pizza;
  const dispatch = useDispatch();
  const itemQuantity = useSelector(getCurrentQuantityById(id));
  const isinCart = itemQuantity > 0;

  function handelAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      imageUrl,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium"> {name} </p>
        <p className="text-sm italic text-stone-500 capitalize">
          {ingredients.join(" , ")}{" "}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}

          {isinCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItem pizzaId={id} itemQuantity={itemQuantity} />
              <DeletItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isinCart && (
            <button onClick={handelAddToCart} className="small">
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;

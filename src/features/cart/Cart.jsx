import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { deletCart } from "./cartSlice";

const Cart = () => {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;
  return (
    <section className="px-4 py-3">
      <Link
        to="/menu"
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline "
      >
        &larr; Back to menu
      </Link>

      <h1 className="mt-4">Your cart, {username}</h1>

      <ul className="box  divide-y divide-stone-200 border-b mt-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Link to="/order/new" className="linksbtn">
          ORDER PIZZAS
        </Link>
        <button className="secondary" onClick={() => dispatch(deletCart())}>
          CLEAR CART
        </button>
      </div>
    </section>
  );
};

export default Cart;

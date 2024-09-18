import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-start pt-16">
      <Link to="/menu" className="linkButton ">
        &larr; Back to menu
      </Link>
      <p className="mt-3">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
};

export default EmptyCart;

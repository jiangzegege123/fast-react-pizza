import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalPrice } from "./cartSlice";
function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div className="flex items-center justify-between bg-stone-800 text-stone-200 uppercase p-4 sm:px-6">
      <p className=" font-semibold text-stone-300 sm:space-x-6 text-sm md:text-base">
        <span>{totalQuantity} pizzas </span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  function handleClick() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    // console.log(111);
    // const existingItem = cart.find((item) => item.pizzaId === id);

    // if (existingItem) {
    //   // 如果存在，则更新数量和总价格
    //   dispatch(increaseItemQuantity(id));
    // } else {
    //   // 如果不存在，则新增到 cart 中
    //   const newItem = {
    //     pizzaId: id,
    //     name,
    //     quantity: 1,
    //     unitPrice,
    //     totalPrice: unitPrice * 1,
    //   };
    //   dispatch(addItem(newItem));
    // }
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text0sm italic text-stone-500 capitalize">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase font-medium text-stone-500">
              Sold out
            </p>
          )}

          {currentQuantity !== 0 && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity id={id} quantity={currentQuantity} />
              <DeleteItem id={id} />
            </div>
          )}

          {!soldOut && !currentQuantity && (
            <Button type="small" onClick={handleClick}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;

import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 uppercase font-semibold text-stone-800 py-3 px-4 inline-block rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-yellow-300 active:bg-state-400 disabled:cursor-not-allowed disabled:bg-slate-600 sm:px-6 sm:py-4";
  const styles = {
    primary: base + "py-4 py-3 sm:px-6 sm:py-4",
    small: base + "py-2 px-4 sm:px-5 sm:py-2.5 text-xs",
    secondary:
      "'inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover: bg-white-200 focus:bg-stone-300 focus:outline-none focus:ring focus: ring-yellow-300 focus: ring-offset-2 disabled: cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2  ",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <Link className={styles[type]} onClick={onClick}>
        {children}
      </Link>
    );

  return (
    <button className={styles[type]} disabled={disabled} to={to}>
      {children}
    </button>
  );
}

export default Button;

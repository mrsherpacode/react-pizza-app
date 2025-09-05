import { Link } from "react-router-dom";

// creating a reusable Button component
function Button({ children, disabled, to, typeOf }) {
  const base =
    "inline-block rounded-full bg-yellow-400  uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    base: base + " px-4  py-2 md:px-5 md:px-2.5 ",
  };
  if (to)
    return (
      <Link to={to} className={styles[typeOf]}>
        {children}
      </Link>
    );
  return (
    <button to={to} disabled={disabled} className={styles[typeOf]}>
      {children}
    </button>
  );
}

export default Button;

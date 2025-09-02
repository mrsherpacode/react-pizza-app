import { Link } from "react-router-dom";

// creating a reusable Button component
function Button({ children, disabled, to }) {
  const className =
    "inline-block rounded-full bg-yellow-400 px-7 py-4 uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-8 sm:py-4";
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button to={to} disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;

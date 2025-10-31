import { Link } from "react-router-dom";

function Button({ children, disabled, to, type = "primary", onClick }) {
  const styles = new (function () {
    this.base =
      "inline-block text-sm rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed";

    this.primary = `${this.base} px-4 py-3 md:px-6 md:py-4`;

    this.small = `${this.base} px-4 py-2 md:px-5 md:py-2.5 text-xs`;

    this.secondary =
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold tracking-wide text-stone-400 uppercase transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5";

    this.round = `${this.base} px-2.5 py-1 text-sm md:px-3.5 md:py-2 `;
  })();

  if (to) {
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-medium  uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 hover:text-stone-600 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-transparent disabled:border-2 disabled:border-stone-300';
  const styles = {
    primary: base + ` px-4 py-3 sm:px-6 sm:py-4`,
    small: base + ' text-xs px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block  text-sm rounded-full border-2 border-stone-300 font-medium  uppercase tracking-wide text-stone-400 transition-all duration-300 hover:bg-stone-300 hover:text-stone-600 focus:bg-stone-300 focus:text-stone-600 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5',
    round: base + ' text-xs px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;

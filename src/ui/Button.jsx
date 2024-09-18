const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="inline-block rounded-full bg-yellow-400 
    px-4 py-3 font-semibold uppercase tracking-wide text-stone-800
     hover:bg-yellow-300 transition-colors  focus:outline-none focus:ring
      focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 
      duration-300 disabled:cursor-not-allowed sm:px-6 sm:py-4 "
    >
      {children}
    </button>
  );
};

export default Button;

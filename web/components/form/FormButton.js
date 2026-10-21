"use client";

const FormButton = ({
  type = "button",
  variant = "primary",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  children,
  className = "",
}) => {
  const baseStyles = `
    font-bold uppercase tracking-wide
    rounded-lg
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
    flex items-center justify-center gap-2
    ${fullWidth ? "w-full" : ""}
  `;

  const variantStyles = {
    primary: `
      bg-white text-ink
      hover:bg-white/90 hover:scale-105
      shadow-lg hover:shadow-xl
      px-8 py-4
      ${!disabled && !isLoading ? "hover:scale-105" : ""}
    `,
    secondary: `
      bg-transparent
      border-2 border-white
      text-white
      hover:bg-white/10
      px-6 py-3
    `,
    ghost: `
      bg-transparent
      text-white/70
      hover:text-white hover:bg-white/5
      px-4 py-2
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Cargando...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default FormButton;

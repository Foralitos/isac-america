"use client";

import { useMemo } from "react";
import FormError from "./FormError";

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
  disabled = false,
  placeholder = "Selecciona una opción",
  className = "",
}) => {
  const selectId = useMemo(
    () => `select-${name || Math.random().toString(36).substr(2, 9)}`,
    [name]
  );
  const errorId = `${selectId}-error`;

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-white block"
        >
          {label}
          {required && (
            <span className="text-white ml-1" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`
            w-full px-4 py-3
            bg-white/5
            border-2 ${error ? "border-white" : "border-white/20"}
            rounded-lg
            text-white
            focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
            appearance-none
            cursor-pointer
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value || option}
              value={option.value || option}
              className="bg-white/5 text-white"
            >
              {option.label || option}
            </option>
          ))}
        </select>

        {/* Custom arrow icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <FormError message={error} id={errorId} />
    </div>
  );
};

export default FormSelect;

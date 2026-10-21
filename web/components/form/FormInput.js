"use client";

import { useMemo } from "react";
import FormError from "./FormError";

const FormInput = ({
  type = "text",
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  error,
  disabled = false,
  min,
  max,
  step,
  className = "",
}) => {
  // Generate unique IDs for accessibility
  const inputId = useMemo(
    () => `input-${name || Math.random().toString(36).substr(2, 9)}`,
    [name]
  );
  const errorId = `${inputId}-error`;

  return (
    <div className={`w-full space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
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

      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`
          w-full px-4 py-3
          bg-white/5
          border-2 ${error ? "border-white" : "border-white/20"}
          rounded-lg
          text-white placeholder:text-white/50
          focus:border-white focus:ring-2 focus:ring-white/20 focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
        `}
      />

      <FormError message={error} id={errorId} />
    </div>
  );
};

export default FormInput;

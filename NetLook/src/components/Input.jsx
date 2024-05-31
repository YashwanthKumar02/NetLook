import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const inputId = useId();

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={inputId} className="mb-1 pl-1 inline-block">
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        type={`${type}`}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;

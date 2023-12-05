"use client";
import React, { useEffect, useRef } from "react";

export const InputBoxDesign = ({
  type,
  name,
  onChange,
  placeholder,
  id,
  value,
  required,
  placeholderClass,
  ...moreProps
}) => {
  const inputRef = useRef();

  const handleFocus = () => {
    const classToRemOnBlur = "translate-y-1/2 mx-3";
    inputRef.current.classList.remove(...classToRemOnBlur.split(" "));
    const classToAddOnFocus = "-translate-y-1/2 mx-3";
    inputRef.current.classList.add(...classToAddOnFocus.split(" "));
  };

  const handleBlur = () => {
    if (!String(value)?.length) {
      const classToRemOnBlur = "-translate-y-1/2 mx-3 bg-[white]";
      inputRef.current.classList.remove(...classToRemOnBlur.split(" "));
      const classToRem = "translate-y-1/2 mx-3";
      inputRef.current.classList.add(...classToRem.split(" "));
    }
  };

  useEffect(() => {
    if (String(value)?.length) {
      handleFocus();
    } else {
      handleBlur();
    }
  }, [value]);
  return (
    <div className="w-full relative ">
      <label
        ref={inputRef}
        for={id}
        className="absolute translate-y-1/2 mx-3 bg-black "
      >
        <span className={`text-sm ${placeholderClass}`}>{placeholder} </span>
        {required ? <span className="text-[#00ccff]">*</span> : null}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        placeholder=" "
        onChange={onChange}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        {...moreProps}
      />
    </div>
  );
};

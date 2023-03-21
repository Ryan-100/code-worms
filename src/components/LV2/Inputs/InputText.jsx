import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import styled from "styled-components";
import tw from "tailwind-styled-components";

/**
 * InputText Component
 *
 * A reusable input field component for forms.
 *
 * @param {Object} props - The props for the component.
 * @param {string} name - The name of the input field.
 * @param {string} type - The type of the input field. Possible values are "text", "email", "password", "number", "tel", "url".
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {Object} control - The `control` object from `react-hook-form`.
 * @returns {JSX.Element} The InputText component.
 * @returns {JSX.Element} The Left icon of component.
 *
 */

export const InputText = ({
  name,
  type = "text",
  placeholder = "Input",
  width,
  control,
  error,
  startPrefix,
  endPrefix,
  disabled,
  border,
}) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  // const inputClasses = `form-control  block  w-full  px-3  py-1.5  text-base font-normal  text-gray-700  bg-white bg-clip-padding  border order-solid border-gray-300  rounded-lg  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  // lg:text-[14px] text-xs ${disabled ? "lg:text-slate-500" : "text-black"}
  // ${error ? "border-red-500" : "border-gray-300"}
  // ${startPrefix ? "pl-10" : ""}
  // ${endPrefix ? "pr-14 " : ""}
  // ${disabled ? "placeholder-gray-300 " : ""}
  // `;

  return (
    <div
      className={`relative ${width ? width + "px" : "w-full"}`}
      data-te-input-wrapper-init
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
        {startPrefix}
      </div>
      <StyledInput
        type={type}
        {...inputProps}
        placeholder={placeholder}
        ref={ref}
        border={border ? true : false}
        disabled={disabled}
        style={{ color: disabled ? "gray" : "black" }}
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <p className="text-slate-500">{endPrefix}</p>
      </div>

      {error ? (
        <div className="text-sm text-red-500 ml-1 mt-1">{error}</div>
      ) : null}
    </div>
  );
};

const InputStyled = styled.input`
  input {
    color: white;
  }
  input:disabled {
    color: gray;
  }
`;

const StyledInput = tw(InputStyled)`
form-control  block  w-full  px-3  py-2.5  text-base font-normal  text-gray-700 bg-gray-900  bg-clip-padding   order-solid   transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none 
lg:text-[14px] text-xs ${(props) =>
  props.disabled ? "lg:text-slate-500" : "text-gray-400"}
${(props) => (props.error ? "border-red-500" : "")} 
${(props) => (props.startPrefix ? "pl-10" : "")} 
${(props) => (props.endPrefix ? "pr-14 " : "")}
${(props) => (props.disabled ? "placeholder-gray-300 " : "")}
${(props) => (props.border ? "rounded-full" : "rounded-lg")}
`;

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  control: PropTypes.object.isRequired,
};
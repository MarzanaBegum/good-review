import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, useState } from "react";

interface InputFieldType {
  label?: string;
  inputImg?: FC;
  height: string;
  labelClass?: string;
  inputClass?: string;
  value?: any;
  onChange?: any;
  myChange?: (v: string) => any;
  isPassword?: boolean;
  readOnly?: boolean;
  type?: string;
}

function InputField(props: InputFieldType & FieldHookConfig<string>) {
  const [open, setOpen] = useState(false);
  const [field, meta] = useField(props);
  const id = props.label ? props.label.replace(" ", "-") : props.name;

  return (
    <div className={props.className}>
      <label
        className={
          "text-[16px] text-[#031B07] font-normal label  leading-[23.36px] block" +
          " " +
          props.labelClass
        }
        htmlFor={id}
      >
        {props.label}
      </label>
      {props.label && <div className="pt-[10px]"></div>}
      <div className="relative">
        <input
          id={id}
          {...field}
          value={props.value || field.value}
          readOnly={props.readOnly}
          onChange={
            props.onChange ||
            ((v) => {
              field.onChange(v);
              props.myChange && props.myChange(v.target.value);
            })
          }
          onKeyDown={(e) =>
            props.type === "number" &&
            ["e", "E", "+", "-", "."].includes(e.key) &&
            e.preventDefault()
          }
          type={
            props.isPassword === true
              ? `${open === true ? "text" : "password"}`
              : props.type
          }
          className={` ${
            meta.touched && meta.error && "!border-error border"
          } w-full input bg-[#FAFAFA] text-[14px] font-normal placeholder:text-[#626F63] ${
            props.inputClass
          } focus:outline-none px-[16px] text-[#667085] rounded-[10px]`}
          placeholder={props.placeholder}
          style={{ height: props.height }}
        />
        {props.inputImg && <props.inputImg />}
        {props.isPassword && (
          <img
            onClick={() => setOpen(!open)}
            className=" absolute top-[18px] right-4 cursor-pointer w-[17px] h-[16px]"
            src={open ? "/icons/eye-open.svg" : "/icons/eye-close.svg"}
            alt=""
          />
        )}
      </div>
      <ErrorMessage
        component="div"
        className=" error text-[red] text-[14px]"
        name={field.name}
      />
    </div>
  );
}

InputField.defaultProps = {
  height: "56px",
};

export default InputField;

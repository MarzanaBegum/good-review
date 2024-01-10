import { useField, FieldHookConfig, ErrorMessage } from "formik";
import { FC, ReactElement } from "react";

interface TextAreaFieldType {
    label?: string;
    inputImg?: FC;
    height: string;
    labelClass?: string;
    inputClass?: string;
    defaultValue?: string;
    onChange?: any;
    value?: any;
}

function TextAreaField(props: TextAreaFieldType & FieldHookConfig<string>) {
    const [field, meta] = useField(props);
    return (
        <div className={props.className}>
            <label
                className={
                    "text-[16px] label text-[#031B07] leading-[23.36px] font-normal   flex gap-[10px]" +
                    " " +
                    props.labelClass
                }
                htmlFor={props.label}
            >
                {props.label}
            </label>
            {props.label && <div className="pt-[10px]"></div>}
            <div className="relative">
                <textarea
                    id={props.label}
                    {...field}
                    className={` ${
                        meta.touched && meta.error && "!border-error border"
                    } w-full input bg-[#FAFAFA] text-[16px] placeholder:text-[#676B68]  ${
                        props.inputClass
                    } focus:outline-none p-[16px] resize-none  text-[#676B68] rounded-[10px]`}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    style={{ height: props.height }}
                    onChange={props.onChange}
                    value={props.value}
                ></textarea>
                {props.inputImg && <props.inputImg />}
            </div>
            <ErrorMessage
                component="div"
                className=" error text-[red] text-[14px]"
                name={field.name}
            />
        </div>
    );
}

TextAreaField.defaultProps = {
    height: "100px",
};

export default TextAreaField;

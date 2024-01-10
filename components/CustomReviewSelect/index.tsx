import React from "react";
import { FieldHookConfig, useField, ErrorMessage } from "formik";
import Select, { StylesConfig } from "react-select";
type SelectOption = {
    value: string;
    label: string;
};
interface InputSelectType {
    label?: string;
    options: SelectOption[];
    labelClass?: string;
    styles?: StylesConfig;
    onChange?: any;
    defaultValue?: any;
    isUpdate?: boolean;
    isOptionDisabled?: boolean;
    handleClick?: () => void;

}

const styles: StylesConfig = {
    // multiValue: (styles: any) => {
    //     return {
    //         ...styles,
    //         backgroundColor: "red",
    //         color: "#fff",
    //     };
    // },
    // multiValueLabel: (styles) => ({
    //     ...styles,
    //     color: "#fff",
    // }),
    singleValue: (style) => ({
        ...style,
        fontSize: 16,
        color: "#626F63",
        fontWeight: 400,
    }),
    input: (styles) => ({
        ...styles,

        padding: 0,
        margin: 0,
        fontSize: 14,
        width: "100%",
        ":focus": {
            outline: "none",
        },
    }),
    placeholder: (styles) => ({
        ...styles,
        fontSize: 16,
        color: "#626F63",
        fontWeight: 400,
    }),
    control: (styles) => ({
        ...styles,
        boxShadow: "none",
        borderColor: "none",
        background: "none",
        border: "none",
        minHeight: 48,
        // ":focus": {
        //     borderColor: "#676767",
        // },
        // ":hover": {
        //     borderColor: "#676767",
        // },
    }),
    clearIndicator: (styles) => ({
        ...styles,
        display: "none",
    }),

    option: (styles, state) => {
        return {
            ...styles,
            ":hover": state.isSelected
                ? {}
                : {
                    background: "#18BA33",
                    color: "white",
                    fontWeight: 400,
                    cursor: "pointer",
                },
            backgroundColor: state.isSelected ? "#E8FCEC" : "transparent",
            fontSize: 16,
            borderRadius: 4,
            fontWeight: state.isSelected ? 400 : 400,
            color: state.isSelected ? "#626F63" : "#626F63",
        };
    },
    valueContainer: (styles) => ({
        ...styles,
        paddingTop: 5,
        paddingBottom: 5,

        paddingLeft: 16,
    }),
    menu: (styles) => ({
        ...styles,
        paddingTop: 8,
        paddingBottom: 8,

        paddingLeft: 10,
        paddingRight: 10,
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    container: (styles) => ({
        ...styles,

        ":focus": { outline: "none" },
    }),
    dropdownIndicator: (base) => ({
        ...base,
        color: "#667085", // Custom colour
    }),
};

function CustomReviewSelect(props: InputSelectType & FieldHookConfig<string>) {
    const [field, meta, helpers] = useField(props);

    return (
        <div className={props.className}>
            <label
                className={
                    "text-[16px] label text-[#031B07] leading-[23.36px] font-normal flex items-center" +
                    " " +
                    props.labelClass
                }
                htmlFor={props.label}
            >
                {/* {props.label} */}
                <div className="flex flex-wrap items-center gap-[12px]">{props.label}
                    {props.isUpdate === true && <div className="flex gap-[12px] items-center">
                        <img
                            src="/images/info.svg"
                            alt="info"
                            className="w-[13.33px] h-[13.33px]"
                        />
                        <button onClick={props.handleClick} type="button" className="text-primary font-normal text-[14px] leading-[19.6px] sm:text-[16px] sm:leading-[22px]">update</button>
                    </div>}
                </div>
            </label>
            {props.label && <div className="pt-[10px]"></div>}
            <div
                className={`  rounded-[8px] bg-[#FAFAFA] ${meta.touched && meta.error && ""
                    } ${props.className} `}
            >
                <Select
                    styles={Object.assign({}, styles, props.styles)}
                    name={field.name}
                    options={props.options}
                    value={props.value}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    onBlur={() => helpers.setTouched(true)}
                    onChange={props.onChange}
                    isDisabled={props.isOptionDisabled}
                />
            </div>
            <ErrorMessage
                component="div"
                className=" error text-[red] text-[16px]"
                name={field.name}
            />
        </div>
    );
}

export default CustomReviewSelect;

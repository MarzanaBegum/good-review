/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import InputField from "../Shared/InputField";
import InputPassword from "../Shared/InputPassword";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { api } from "../../api";
import { toast } from "react-toastify";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { useRouter } from "next/router";
import ContinueWithGoogle from "../ContinueWithGoogle";
import ContinueWithFacebook from "../ContinueWithFacebook";
import handleGoogleLogin from "../ContinueWithGoogle/GoogleLoginLogic";

export type InputType = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirm_password: string;
};

const schema = yup.object({
    firstName: yup.string().required("Enter your first name"),
    lastName: yup.string().required("Enter your last name"),
    email: yup.string().email().required("Enter your email address"),
    password: yup
        .string()
        .required("Enter your password")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords does not match")
        .required("Enter your password"),
});

const SignUpForm = () => {
    const router = useRouter();
    const [isCheck, setIsCheck] = useState(false);
    const [buttonLoading, setButtonLoading] = useState(false);
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: InputType) => {
        const { confirm_password, ...rest } = data;
        if (buttonLoading) return;
        try {
            setButtonLoading(true);
            setError("");
            const res = await api.post("/auth", {
                ...rest,
                verified: false,
            });
            toast.success(res?.data?.message);
            router.push(`/signup/resend-email/${rest.email}`);
            await new Promise((resolve) => {});
        } catch (error: any) {
            setButtonLoading(false);
            setError(
                error?.response ? error.response.data?.message : error.message
            );
        }
    };
    return (
        <div className="">
            <div className="flex gap-[17px]">
                <ContinueWithGoogle
                    onGoogleLogin={handleGoogleLogin(setError, "/dashboard")}
                />
                <ContinueWithFacebook setError={setError} />
            </div>
            {error && (
                <div className="w-[100%] mt-[10px] flex items-center pl-[15px] pr-[14px] rounded-[4px] min-h-[48px] bg-[#FFE5E7]">
                    <img
                        src="/icons/alert-icon.svg"
                        alt="alert icon"
                        className="w-[18.33px] h-[18.33px] mr-[9px]"
                    />
                    <h3 className="text-[13px] font-normal leading-[18px] text-[#252C48]">
                        {error}
                    </h3>
                </div>
            )}
            <div className="flex items-center my-[24px] sm:my-[40px]">
                <div className="border-b border-[#00000026] w-1/2"></div>
                <div className="text-[16px] sm:px-[30.5px] px-[12px] text-[#626F63] font-normal">
                    Or
                </div>
                <div className="border-b border-[#00000026] w-1/2"></div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-[16px]">
                    <div>
                        <InputField
                            {...register("firstName")}
                            placeholder="Enter your first name"
                            label="First Name"
                            className={`${
                                errors.firstName
                                    ? "border-error text-error"
                                    : "focus:border-[#17B532]"
                            }`}
                        />
                        {errors.firstName && (
                            <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                                {errors.firstName?.message?.toString()}
                            </p>
                        )}
                    </div>
                    <div>
                        <InputField
                            {...register("lastName")}
                            placeholder="Enter your last name"
                            label="Last Name"
                            className={`${
                                errors.lastName
                                    ? "border-error text-error"
                                    : "focus:border-[#17B532]"
                            }`}
                        />
                        {errors.lastName && (
                            <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                                {errors.lastName?.message?.toString()}
                            </p>
                        )}
                    </div>
                    <div>
                        <InputField
                            {...register("email")}
                            placeholder="Enter your email"
                            label="Email"
                            className={`${
                                errors.email
                                    ? "border-error text-error"
                                    : "focus:border-[#17B532]"
                            }`}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                                {errors.email?.message?.toString()}
                            </p>
                        )}
                    </div>
                    <div className="flex gap-[16px] sm:gap-[24px] flex-col sm:flex-row">
                        <div className="w-[100%] sm:w-[50%]">
                            <InputPassword
                                {...register("password")}
                                placeholder="Enter your password"
                                label="Password"
                                className={`${
                                    errors.password
                                        ? "border-error text-error"
                                        : "focus:border-[#17B532]"
                                }`}
                            />
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                                    {errors.password?.message?.toString()}
                                </p>
                            )}
                        </div>
                        <div className="w-[100%] sm:w-[50%]">
                            <InputPassword
                                {...register("confirm_password")}
                                placeholder="Enter your password"
                                label="Confirm Password"
                                className={`${
                                    errors.confirm_password
                                        ? "border-error text-error"
                                        : "focus:border-[#17B532]"
                                }`}
                            />
                            {errors.confirm_password && (
                                <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                                    {errors.confirm_password?.message?.toString()}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="pt-[24px]"></div>
                <Checkbox isCheck={isCheck} setIsCheck={setIsCheck} />
                <div className="pt-[24px]"></div>
                <button
                    disabled={!!!isCheck}
                    type="submit"
                    className={classNames(
                        isCheck === false
                            ? "bg-[#D9D9D9] text-[#031B07]"
                            : "bg-[#17B532] hover:bg-[#14a02b] text-[#FFFFFF] cursor-pointer",
                        "w-[100%] h-[48px] text-[16px] sm:text-[18px] transition-all duration-700 ease-in-out font-medium rounded-[10px]"
                    )}
                >
                    {buttonLoading ? (
                        <span className="flex items-center justify-center">
                            <LoadingAnimation color="white" />
                        </span>
                    ) : (
                        "Sign up"
                    )}
                </button>
                <div className="pt-[24px]"></div>
            </form>
            <h2 className="text-[#626F63] text-center text-[16px] font-normal leading-[146%]">
                Already have an account?{" "}
                <Link href="/signin">
                    <span className="cursor-pointer text-[#17B532] underline decoration-[#17B532]">
                        Sign In
                    </span>
                </Link>
            </h2>
        </div>
    );
};
export default SignUpForm;

type RCTYPE = {
    isCheck: boolean;
    setIsCheck: React.Dispatch<React.SetStateAction<boolean>>;
};
const Checkbox = ({ isCheck, setIsCheck }: RCTYPE) => {
    return (
        <div
            onClick={() => setIsCheck(!isCheck)}
            className="flex items-center gap-[10px] cursor-pointer"
        >
            <div
                className={`w-[14px] h-[14px] border rounded-sm border-[#D0D5DD] flex justify-center items-center ${
                    isCheck && "!border-[#17B532] bg-[#17B532]"
                }`}
            >
                {isCheck && <div className="text-[10px] text-white">✓</div>}
            </div>
            <div className="text-[#344054] text-[14px] font-normal leading-[21px]">
                I agree to all{" "}
                <Link href="/terms-condition">
                    <span className="text-[#17B532]">Terms</span>{" "}
                </Link>{" "}
                &{" "}
                <Link href="/privacy-policy">
                    <span className="text-[#17B532]">Privacy Policy</span>.
                </Link>
            </div>
        </div>
    );
};

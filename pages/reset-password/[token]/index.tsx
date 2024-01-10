/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { GetServerSideProps } from "next";
import InputPassword from "../../../components/Shared/InputPassword";
import { api } from "../../../api";
import { toast } from "react-toastify";
import LoadingAnimation from "../../../components/Shared/LoadingAnimation/LoadingAnimation";

type InputType = {
    password: string;
    confirm_password: string;
};

const schema = yup.object({
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
const ResetPassword = () => {
    const router = useRouter();
    const { token } = router.query;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<InputType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: InputType) => {
        if (isLoading) return;
        setError("");
        setIsLoading(true);
        try {
            const { password } = data;
            const res = await api.put("/auth/reset-password", {
                password,
                token,
            });
            toast.success(res.data.message);
            setIsLoading(false);
            await router.push("/signin");
            reset();
        } catch (err: any) {
            setIsLoading(false);
            setError(err?.response?.data?.message);
        }
    };

    return (
        <div className="w-[100%] h-screen relative flex items-center justify-center">
            <div className="w-[50%] h-[100%] relative hidden xl:flex">
                <img
                    src="/images/signup-img.svg"
                    alt="image"
                    className="w-[100%] h-[100%] absolute top-0 left-0 object-cover"
                />
            </div>
            <div className="w-[100%] xl:w-[50%]">
                <div className="pb-[40px] pt-[30px] 2xl:py-[0px] px-[16px] sm:px-[70px] md:px-[114px] lg:px-[242px] xl:px-[30px] 2xl:pl-[72px] 2xl:pr-[120px] 3xl:px-[150px] 4xl:px-[210px]">
                    <h2 className="text-[32px] mb-[16px] sm:text-[40px] text-center font-semibold text-[#031B07]">
                        Reset Password
                    </h2>
                    <h3 className="text-[16px] mb-[24px] sm:mb-[40px] leading-[146%] text-center font-normal text-[#667085]">
                        Enter your new password must be different form previouse
                        used passwords.
                    </h3>
                    {error && (
                        <div className="w-[100%] mt-[10px] mb-[24px] flex items-center pl-[15px] pr-[14px] rounded-[4px] min-h-[48px] bg-[#FFE5E7]">
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <InputPassword
                                {...register("password")}
                                placeholder="*********"
                                label="New Password"
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
                        <div className="pt-4"></div>
                        <div>
                            <InputPassword
                                {...register("confirm_password")}
                                placeholder="*********"
                                label="Confirm New Password"
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
                        <div className="pt-[24px]"></div>
                        <button
                            type="submit"
                            className="w-[100%] h-[48px] text-[16px] sm:text-[18px] font-medium text-[#FFFFFF] bg-[#17B532] hover:bg-[#14a02b] transition-all duration-700 ease-in-out cursor-pointer rounded-[10px]"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center">
                                    <LoadingAnimation color="white" />
                                </span>
                            ) : (
                                "Change Password"
                            )}
                        </button>
                    </form>
                    <div className="pt-4"></div>
                    <h2 className="text-[#3B415A] text-[16px] text-center font-normal leading-[24px]">
                        Back to{" "}
                        <Link href="/signin">
                            <span className="cursor-pointer text-[#17B532] underline decoration-[#17B532]">
                                Sign In
                            </span>
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;
    const { token } = params as any;
    if (!token) {
        return {
            props: {},
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }
    // console.log(token);
    return {
        props: {},
    };
};

export default ResetPassword;

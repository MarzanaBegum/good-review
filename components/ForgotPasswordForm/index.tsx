/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import InputField from "../Shared/InputField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { api } from "../../api";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

type InputType = {
  email: string;
};

const schema = yup.object({
  email: yup.string().email().required("Enter your email address"),
});

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    if (buttonLoading) return;
    setError("");

    try {
      setButtonLoading(true);
      const res = await api.post("/auth/forgot-password", data);
      toast.success(res.data.message);
      setButtonLoading(false);
      reset()
    } catch (err: any) {
      setButtonLoading(false);
      setError(err?.response?.data?.message);
    }
  };
  return (
    <div className="">
      {error && (
        <div className="w-[100%] my-[10px] flex items-center pl-[15px] pr-[14px] rounded-[4px] min-h-[48px] bg-[#FFE5E7]">
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
        <div className="pt-[24px]"></div>
        <button
          type="submit"
          className="w-[100%] h-[48px] text-[16px] sm:text-[18px] font-medium text-[#FFFFFF] bg-[#17B532] hover:bg-[#14a02b] transition-all duration-700 ease-in-out cursor-pointer rounded-[10px]"
        >
          {buttonLoading ? (
            <span className="flex items-center justify-center">
              <LoadingAnimation color="white" />
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};
export default ForgotPasswordForm;

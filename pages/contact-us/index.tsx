/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../../components/Layout";
import InputField from "../../components/Shared/InputField";
import classNames from "classnames";
import LoadingAnimation from "../../components/Shared/LoadingAnimation/LoadingAnimation";
import { api } from "../../api";
import { toast } from "react-toastify";
import ContactSuccess from "../../components/Modal/ContactSuccess";

export type InputType = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Enter your name"),
  email: yup.string().email().required("Enter your email"),
  message: yup.string().required("Type your message here"),
});

function ContactUsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
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
    setIsLoading(true);
    try {
      await api.post("/contact-us", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      setIsLoading(false);
      reset();
      setOpenModal(true)
    } catch (err: any) {
      setIsLoading(false);
      const errMessage = err.response ? err.response.data.message : err.message;
      toast.error(errMessage);
    }
  };
  return (
    <Layout>
      <div className="bg-[#FAFAFA]">
        <div className="container  py-[30px] sm:py-[40px] md:pt-[50px] md:pb-[80px] lg:py-[80px] 2xl:pt-[100px] 2xl:pb-[140px]">
          <div className="flex flex-col lg:flex-row p-[20px] gap-[32px] sm:p-[40px] sm:gap-[40px] xl:px-[60px] xl:py-[40px] xl:gap-[78px] 2xl:p-[60px] justify-center bg-[#F5F6F8] rounded-[10px]">
            <div className="w-[100%]">
              <h2 className="text-[20px] sm:text-[32px] md:text-[48px] lg:text-[56px] leading-[120%] font-bold text-[#031B07]">
                Contact Us
              </h2>
              <p className="mt-[10px] sm:mt-[20px] text-[16px] font-normal leading-[146%] text-[#3C403D]">
                Do you have any quesions about our system? Please feel free to
                contact us.
              </p>
              <div className="pt-[20px] sm:pt-[40px] md:pt-[60px] lg:pt-[80px] 2xl:pt-[100px]"></div>
              <div>
                <h2 className="text-[16px] mb-[12px] sm:text-[24px] sm:mb-[20px] md:mb-[29px] leading-[125%] font-semibold text-[#031B07]">
                  Contact Info:
                </h2>
                <div className="flex items-center gap-[16px] mb-[14px] sm:mb-[20px]">
                  <img
                    src="/images/Mobile.svg"
                    alt="mobile"
                    className="w-[18px] h-[18px]"
                  />
                  <h2 className="text-[14px] sm:text-[20px] leading-[135%] font-medium text-[#031B07]">
                    +1 386-688-3295
                  </h2>
                </div>
                <div className="flex items-center gap-[19px]">
                  <img
                    src="/images/mail-image.svg"
                    alt="mobile"
                    className="w-[18px] h-[18px]"
                  />
                  <h2 className="text-[14px] sm:text-[20px] leading-[135%] font-medium text-[#031B07]">
                    Ourstudio@hello.com
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-[100%] p-[16px] sm:p-[20px] bg-[#FFFFFF] rounded-[15px]">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-[24px]">
                  <div>
                    <InputField
                      {...register("name")}
                      placeholder="Enter your name"
                      label="Full Name"
                      className={`${
                        errors.name
                          ? "border-red-500 text-red-500"
                          : "focus:border-[#17B532]"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                        {errors.name?.message?.toString()}
                      </p>
                    )}
                  </div>
                  <div>
                    <InputField
                      {...register("email")}
                      placeholder="Enter your email"
                      label="Email Address"
                      className={`${
                        errors.email
                          ? "border-red-500 text-red-500"
                          : "focus:border-[#17B532]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                        {errors.email?.message?.toString()}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-[16px] font-normal leading-[146%] text-[#031B07]"
                    >
                      Messages
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows={5}
                      cols={5}
                      placeholder="Write your message here"
                      className={classNames(
                        errors.message
                          ? "border-red-500 text-red-500"
                          : "focus:border-[#17B532]",
                        "mt-2 w-full p-[12px] outline-none text-[14px] leading-[146%] font-normal border text-[#626F63] border-[#C1C4C0] rounded-[10px]"
                      )}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500 first-letter:capitalize">
                        {errors.message?.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-[100%] my-[24px] sm:my-[40px] cursor-pointer font-medium h-[48px] bg-[#17B532] border border-[#17B532] rounded-[10px] text-[18px] text-[#FFFFFF] hover:bg-[#0f8d24] transition-all duration-300"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <LoadingAnimation color="white" />
                      </span>
                    ) : (
                      "Send Messages"
                    )}
                  </button>
                  <button
                    onClick={() => reset()}
                    type="button"
                    className="w-[100%] cursor-pointer font-medium h-[48px] hover:text-[#031B07] hover:bg-[#DBDCDA] border border-[#DBDCDA] rounded-[10px] text-[18px] text-[#334535]"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ContactSuccess
        isOpen={openModal}
        handleModal={() => setOpenModal(!openModal)}
      />
    </Layout>
  );
}

export default ContactUsPage;

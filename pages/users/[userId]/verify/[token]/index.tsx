import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";
import { api } from "../../../../../api";

export default function TokenVerifyPage() {
    return (
        <div className="w-[100%] h-screen">
            <div className="flex flex-col items-center justify-center h-[100%]">
                <div>
                    <img
                        src="/images/email-verified.svg"
                        className="w-[300px]"
                        alt=""
                    />
                </div>
                <div className="pt-10"></div>
                <h2 className="text-[26px] mb-[16px] leading-[146%] text-center font-semibold text-[#031B07]">
                    Your email has been verified
                </h2>
                <Link href="/signin">
                    <button className="w-[175px] h-[48px] 2xl:w-[200px] 2xl:h-[52px] text-[16px] font-semibold cursor-pointer rounded-[6px] text-[#FFFFFF] bg-[#17B532] duration-700 ease-in-out hover:bg-[#13ac2d]">
                        Go To Login
                    </button>
                </Link>
                <div className="pt-[200px]"></div>
            </div>
        </div>
    );
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
    try {
        const { userId, token } = query;
        if (!userId || !token) throw new Error();

        const res = await api.post(`/auth/signup/${userId}/verify/${token}`);

        await api.post(`/notify`, {
            userId: res.data.user._id,
            title: "Welcome to good review",
            status: "verify successfull",
        });

        return {
            props: {}, // will be passed to the page component as props
        };
    } catch (error) {
        toast.error("User already verified");
        return {
            redirect: {
                permanent: false,
                destination: "/signin",
            },
            props: {},
        };
    }
}

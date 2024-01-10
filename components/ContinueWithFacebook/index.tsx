/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "../Shared/Button";
import ReactFacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import {
    ReactFacebookFailureResponse,
    ReactFacebookLoginInfo,
} from "react-facebook-login";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { api } from "../../api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

const FACEBOOK_APP_ID =
    process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || "477479684501447";

type Response = ReactFacebookLoginInfo & {
    error?: { message: string };
} & ReactFacebookFailureResponse;

function ContinueWithFacebook({ setError }: any) {
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const facebookLogin = async (res: Response) => {
        if (loading) return;
        setError("");
        setLoading(true);
        try {
            if (res.error) {
                throw new Error(res.error.message);
            }
            if (res.status) {
                throw new Error("Something went wrong");
            }
            const authObj = {
                firstName: res.name || "Unknown",
                lastName: " ",
                email: res.email || " ",
                facebookId: res.id,
                profile: res.picture?.data?.url || " ",
            };
            const {
                data: { token },
            } = await api.post("/auth/facebook-signin", authObj);
            const expires = new Date(Date.now() + 87400e6);
            setCookie("auth", token, { expires });
            await router.push("/dashboard");
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            const errMessage = err.response
                ? err.response.data.message
                : err.message;
            setError(errMessage);
            console.log("Error Occurred!", errMessage);
        }
    };

    return (
        <div className="w-[50%]">
            <ReactFacebookLogin
                appId={FACEBOOK_APP_ID}
                fields="name,email,picture"
                reAuthenticate
                callback={facebookLogin}
                render={(props) => (
                    <Button
                        onClick={props.onClick}
                        className="flex items-center justify-center"
                    >
                        {loading ? (
                            <LoadingAnimation color="#18BA33" />
                        ) : (
                            <img
                                src="/icons/facebook.svg"
                                alt="facebook"
                                className="w-[24px] h-[24px]"
                            />
                        )}
                    </Button>
                )}
            />
        </div>
    );
}

export default ContinueWithFacebook;

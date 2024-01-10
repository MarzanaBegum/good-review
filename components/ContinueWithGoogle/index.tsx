import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState } from "react";
import Button from "../Shared/Button";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";

export type GoogleLoginData = {
    email: string;
    firstName: string;
    lastName: string;
    profile: string;
};

export type GoogleLoginType = (
    data: GoogleLoginData | undefined,
    setGoogleLoading: React.Dispatch<React.SetStateAction<boolean>>
) => any;

type CWGType = {
    onGoogleLogin?: GoogleLoginType;
};

function ContinueWithGoogle({ onGoogleLogin }: CWGType) {
    const [googleLoading, setGoogleLoading] = useState(false);

    const googleLogin = useGoogleLogin({
        onSuccess: async (res) => {
            setGoogleLoading(true);
            try {
                const apiResponse = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    { headers: { Authorization: `Bearer ${res.access_token}` } }
                );
                const userInfo = apiResponse.data;
                onGoogleLogin &&
                    onGoogleLogin(
                        {
                            email: userInfo.email,
                            firstName: userInfo.given_name,
                            lastName: userInfo.family_name || " ",
                            profile: userInfo.picture,
                        },
                        setGoogleLoading
                    );
            } catch (error: any) {
                setGoogleLoading(false);
                onGoogleLogin && onGoogleLogin(undefined, setGoogleLoading);
            }
        },
        onError: (err) => {
            setGoogleLoading(false);
            onGoogleLogin && onGoogleLogin(undefined, setGoogleLoading);
        },
    });

    return (
        <>
            <div onClick={() => googleLogin()} className="w-[50%]">
                <Button className="flex items-center justify-center">
                    {googleLoading ? (
                        <LoadingAnimation color="#18BA33" />
                    ) : (
                        <img
                            src="/icons/google-icon.svg"
                            alt="google"
                            className="w-[24px] h-[24px]"
                        />
                    )}
                </Button>
            </div>
        </>
    );
}

export default ContinueWithGoogle;

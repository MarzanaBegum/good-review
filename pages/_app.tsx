import "../styles/globals.css";
import type { AppProps } from "next/app";
import "react-photo-view/dist/react-photo-view.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { deleteCookie } from "cookies-next";

const queryClient = new QueryClient();

import { GoogleOAuthProvider } from "@react-oauth/google";
import ProtectedRoutes, {
    ProtectedRoutesProvider,
} from "../components/Shared/ProtectedRoutes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { USER_STATE } from "../state";

const GOOGLE_CLIENT =
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT ||
    "1044657242184-snserdrnpdbu84f5tcoae1iasvq1ilkc.apps.googleusercontent.com";

export default function App({
    Component,
    pageProps,
    id,
}: AppProps & { id?: string }) {
    const [user, setUser] = useAtom<any>(USER_STATE);
    const router = useRouter();

    useEffect(() => {
        if (user?.status === "banned") {
            deleteCookie("auth");
            router.push("/signup");
        }
    }, [router, user]);
    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT}>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
            />
            <QueryClientProvider client={queryClient}>
                <ProtectedRoutesProvider id={id}>
                    <Component {...pageProps} />
                </ProtectedRoutesProvider>
            </QueryClientProvider>
        </GoogleOAuthProvider>
    );
}

App.getInitialProps = ProtectedRoutes;

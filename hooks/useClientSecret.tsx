import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { CLIENT_SECRET, USER_STATE } from "../state";
import { api } from "../api";

function useClientSecret() {
    const [clientSecret, setClientSecret] = useAtom(CLIENT_SECRET);
    const [loading, setLoading] = useState(true);
    const [user] = useAtom(USER_STATE);

    const handleClientSecret = async () => {
        try {
            if (!clientSecret) {
                const { data } = await api.post(
                    "/payment/intent/" + user?.userStore.customerId
                );

                setClientSecret(data.client_secret);
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleClientSecret();
    }, [clientSecret]);

    return { loading, clientSecret };
}

export default useClientSecret;

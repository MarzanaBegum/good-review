import React from "react";
import useClientSecret from "../../hooks/useClientSecret";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "../../utils/stripePromise";
import PaymentForm from "./PaymentForm";

function CardPaymentMethod() {
    const { loading, clientSecret } = useClientSecret();
    return (
        <div>
            {!loading && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <PaymentForm />
                </Elements>
            )}
        </div>
    );
}

export default CardPaymentMethod;

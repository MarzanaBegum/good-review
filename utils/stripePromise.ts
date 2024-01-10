import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUBLISH_KEY =
    process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY ||
    "pk_test_51LpbnJLpSmU6gOZ7D4ARj7x0qx27TiEswjs0pgt1UtH5P3lhkfBtcJcDUufn0ONqbsu7UwIF8FSd78o7q6uK7IUU0048KjfyYa";

export default loadStripe(STRIPE_PUBLISH_KEY);

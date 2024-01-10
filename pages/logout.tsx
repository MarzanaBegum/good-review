import { deleteCookie } from "cookies-next";
import { GetServerSideProps } from "next";
import React from "react";

function Logout() {
    return <div></div>;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    deleteCookie("auth", { req, res });
    return {
        redirect: {
            destination: "/signin",
            permanent: false,
        },
    };
};

export default Logout;

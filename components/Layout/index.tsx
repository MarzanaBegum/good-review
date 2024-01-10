import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

type DefaultLayout = {
    children: ReactNode;
};
const Layout = ({ children }: DefaultLayout) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;

import React from "react";
import Image from "next/image";
import SidebarItem from "../../SidebarItem";

const Sidebar = () => {
    return (
        <>
            <div className="bg-[#FFFFFF]">
                <div className="fixed z-[99] top-[96px] left-0 h-screen bg-[#FFFFFF] container1 drawer ">
                    <div className="2xl:w-[255px] lg:w-[230px]  container2 h-screen">
                        <SidebarItem />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;

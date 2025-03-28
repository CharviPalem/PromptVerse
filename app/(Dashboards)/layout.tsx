"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavBar from "@/components/navbar";
import Sidebar from "@/components/sideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            
            {/* Desktop Sidebar */}
            <div className="hidden md:flex w-72 bg-gray-900 text-white z-50 shadow-lg fixed h-full">
                <Sidebar />
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-50 w-72 transition-transform duration-300 bg-gray-900 text-white md:hidden
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
                style={{ width: "65vw", height: "100vh" }}
            >
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-lg font-bold"></h1>
                    <button onClick={toggleSidebar}>
                        <X className="w-10 h-6" />
                    </button>
                </div>
                <Sidebar />
            </div>

            {/* Toggle Button (Mobile only) */}
            <button
                onClick={toggleSidebar}
                className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md shadow-lg"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Main Content */}
            <div className="flex-1 md:ml-72 overflow-y-auto bg-gray-100">
                <NavBar />
                <main className="p-6 min-h-screen">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;

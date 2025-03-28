"use client";

import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard ,MessageSquare, Music, Settings, Video,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const routes =[
    {
        label : "Dashboard",
        icon: LayoutDashboard,
        href : "/dashboard",
        color: "text-[#8377D1]"
    },
    {
        label : "Code Generation",
        icon: Code,
        href : "/code",
        color: "text-[#F49CBB]"
    },
    {
        label : "Conversation",
        icon: MessageSquare,
        href : "/conversation",
        color: "text-[#07BEB8]"
    },
    {
        label : "Image Generation",
        icon: ImageIcon,
        href : "/image",
        color: "text-[#8377D1]"
    },
    {
        label : "Video Generation",
        icon: Video,
        href : "/video",
        color: "text-[#F49CBB]"
    },
    {
        label : "Music Generation",
        icon: Music,
        href : "/music",
        color: "text-[#07BEB8]"
    },
    {
        label : "Settings",
        icon: Settings,
        href : "/settings"
    },
    
];

const Sidebar = () => {
    return (  
        <div className="space-y-4 py-4 flex flex-col h-full w-full md:w-72 bg-[#0D1F2D] text-white">
            <div className="px-3 py-2 flex-1"> 
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image
                            fill src={"/logo.png"} alt={"LOGO"}                    />
                </div>
                <h1 className="text-2xl fint-bold">PromptVerse</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map ((route)=>(
                        <Link href={route.href} key={route.href} className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounted-lg transition")}> 
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;
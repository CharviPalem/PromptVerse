"use client"
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sideBar";
import { useEffect,useState } from "react";


const MobileNav = () => {
    const [isMounted,setIsMounted] =useState(false);
    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }

    return (
        <Sheet>
            <SheetTrigger asChild> 
                <Button variant="ghost" size="icon">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0"> 
                
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle> 
               
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
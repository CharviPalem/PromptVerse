import { UserButton } from "@clerk/nextjs";
import MobileNav from "./mobileNav";

const NavBar = () => {
    return (
        <div className="flex items-center p-4">
            
            {/* Mobile Nav (Hidden on Desktop) */}
            <div className="md:hidden">
                <MobileNav />
            </div>

            {/* User Button (Always visible, aligned to the right) */}
            <div className="flex justify-end w-full">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    );
};

export default NavBar;

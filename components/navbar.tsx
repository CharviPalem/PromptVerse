import { UserButton } from "@clerk/nextjs";
import MobileNav from "./mobileNav";

const NavBar = () => {
    return ( 
        <div className="flex item-center p-4">
            <MobileNav/>
            <div className="flex justify-end w-full">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
     );
}
 
export default NavBar;
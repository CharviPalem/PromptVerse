import NavBar from "@/components/navbar";
import Sidebar from "@/components/sideBar";

const DashboardLayout = ({
    children
}:{
    children:React.ReactNode;
}) => {
    return (  
        <div className="h-full relative flex">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col w-72 h-full bg-gray-900 text-white z-[80] shadow-lg">
            <Sidebar/>
        </div>
    
        {/* Main Content */}
        <main className="flex-3 bg-gray-100 md:pl-12 p-3">
                <NavBar/>
                {children}
        </main>
    </div>
    
    );
}
 
export default DashboardLayout;
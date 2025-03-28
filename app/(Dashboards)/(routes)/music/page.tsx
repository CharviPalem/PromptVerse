import { Heading } from "@/components/heading";
import { MessagesSquare, Music2, Music2Icon } from "lucide-react";

const MusicPage = () => {
    return ( 
        <div>
            <Heading 
            title={"Music Generation"}  
            icon={Music2Icon}
            iconColor="text-emerald-500"
            bgColor="text-emerald-500/10"
            />
        </div>
     );
}
 
export default MusicPage;
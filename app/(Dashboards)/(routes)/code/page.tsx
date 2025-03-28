import { Heading } from "@/components/heading";
import { Code2Icon, MessagesSquare } from "lucide-react";

const CodePage = () => {
    return ( 
        <div>
            <Heading 
            title={"Code Generation"}  
            icon={Code2Icon}
            iconColor="text-green-700"
            bgColor="text-green-700/10"
            />
        </div>
     );
}
 
export default CodePage;
import { Heading } from "@/components/heading";
import { MessagesSquare } from "lucide-react";

const ConversationPage = () => {
    return ( 
        <div>
            <Heading 
            title={"Conversation"}  
            icon={MessagesSquare}
            iconColor="text-violet-500"
            bgColor="text-violet-500/10"
            />
        </div>
     );
}
 
export default ConversationPage;
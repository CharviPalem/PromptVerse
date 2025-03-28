import { Heading } from "@/components/heading";
import { Images, MessagesSquare } from "lucide-react";

const ImagePage = () => {
    return ( 
        <div>
            <Heading 
            title={"Image Generation"}  
            icon={Images}
            iconColor="text-pink-700"
            bgColor="text-pink-700/10"
            />
        </div>
     );
}
 
export default ImagePage;
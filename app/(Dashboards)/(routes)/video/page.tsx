import { Heading } from "@/components/heading";
import { MessagesSquare, Video, VideoIcon } from "lucide-react";

const VideoPage = () => {
    return ( 
        <div>
            <Heading 
            title={"Video Generation"}  
            icon={VideoIcon}
            iconColor="text-orange-700"
            bgColor="text-orange-700/10"
            />
        </div>
     );
}
 
export default VideoPage;
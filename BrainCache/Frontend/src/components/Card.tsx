import { Type } from "../pages/dashboard"
import EmbedTweet from "./EmbedTweet"
import YouTubeEmbed from "./EmbedYoutube"
import { CardProps } from "./enum"
import { DeleteIcon, DocumentIcon, LinkIcon, ShareIcon, TwitterIcon, YoutubeIcon } from "./icons"

const icon:{[key in Type]:JSX.Element} = {
    "youtube": <YoutubeIcon/>,
    "twitter": <TwitterIcon/>,
    "document": <DocumentIcon/>,
    "link": <LinkIcon/>,
}

export function Card(props: CardProps){
    return <div className="flex flex-wrap flex-col gap-4 border-1 border-gray-200 shadow-xl h-fit w-72 rounded-md  p-4">

        <div className="flex justify-between w-full font-medium text-gray-600">
            <div className="flex items-center gap-2">
                {icon[props.type]}
                {props.title}
            </div>
            
            <div className="flex items-center gap-2">
                <ShareIcon size={4} color={"gray-600"}/>
                <DeleteIcon Id={props._id} onDelete={()=>props.onDelete(props._id)}/>
            </div>
        </div>
        
        <div className="w-full">
    {props.type === "youtube" && <YouTubeEmbed link={props.link} />}
    {props.type === "twitter" && <EmbedTweet tweetLink={props.link} />}
    {props.type === "link" && (
        <div >
            <a
                className="text-violet-500"
                target="_blank"
                href={props.link}
                style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                    display: "block"
                }}
            >
                {props.link}
            </a>
        </div>
    )}
    {props.type === "document" && (
        <div>
            <a
                className="text-violet-500"
                target="_blank"
                href={props.link}
                style={{
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    whiteSpace: "normal",
                    display: "block"
                }}
            >
                {props.link}
            </a>
        </div>
    )}
</div>

    </div>
}
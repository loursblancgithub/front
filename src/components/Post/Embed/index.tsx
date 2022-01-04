import React from "react"
import {Embed as EmbedType, EmbedEnumType} from "../../../data/post/types"
import EmbedGallery from "./EmbedGallery"
import Poll from "./Poll"
import Video from "./Video"
import EmbedImages from "./EmbedImages"


type EmbedProps = {
    embed: EmbedType
}
const Embed: React.FC<EmbedProps> = ({embed}) => {
    
    switch (embed.embedType) {
        case EmbedEnumType.DOCUMENT:
            return null
        case EmbedEnumType.VIDEO:
            return <Video data={embed} />
        case EmbedEnumType.POLL:
            return <Poll data={embed} />
        case EmbedEnumType.GALLERY:
            return <EmbedGallery gallery={embed} />
        case EmbedEnumType.IMAGE:
            return <EmbedImages images={embed.images}/>
        default:
            return null
    }
}

export default Embed

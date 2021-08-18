import {Club} from "../club/types"
import {Author} from "../request.type"
import {GalleryPreForm} from "../gallery/types"
import {Image, Video, Document, MediaUploadNSFW, MediaEditionNSFW} from "../media/types"
import {Poll, PollForm} from "../poll/types"


export enum EmbedEnumType {
    GALLERY = "gallery",
    POLL = "poll",
    DOCUMENT = "document",
    VIDEO = "video",
    IMAGE = "image",
}

export type BasicPostCreation = {
    description: string
    private: boolean
    feed: number
}


export type PostCreation = BasicPostCreation & {
    linkedClub?: number
    publicationDate?: Date
    attachements:  { [type: string]: number }
}

export type PostUpdate = {
    description: string
    private: boolean
    publicationDate: Date
    linkedClub?: number
    removeEmbed?: boolean
    attachements?:  { [type: string]: number }
}


export type Post = {
    id: number
    description: string
    publicationDate: Date
    creationDate: number
    private: boolean
    pinned: boolean
    author: Author
    embed?: Embed
    thread: number
    linkedClub?: Club

    nbComments: number
    nbLikes: number
    liked: boolean
    hasWriteAccess: boolean
}

export type EmbedPoll = Poll & {
    embedType: EmbedEnumType.POLL
}

export type EmbedGallery = {
    id: number
    name: string
    preview: Array<Image>
    pseudo: boolean
    embedType: EmbedEnumType.GALLERY
}
export type EmbedPseudoGallery = {
    id: number
    images: Array<Image>
    embedType: EmbedEnumType.IMAGE
}

export type EmbedMedia = Video & {embedType: EmbedEnumType.VIDEO}
    | Document  & {embedType: EmbedEnumType.DOCUMENT}

export type Embed = EmbedGallery | EmbedPseudoGallery | EmbedMedia | EmbedPoll

export type EmbedGalleryCreation = {
    type: EmbedEnumType.GALLERY
    data: GalleryPreForm
}
export type EmbedMediaCreation = {
    type: EmbedEnumType.DOCUMENT | EmbedEnumType.VIDEO | EmbedEnumType.IMAGE
    data: Array<MediaUploadNSFW>
}

export type EmbedMediaEdition = {
    type: EmbedEnumType.DOCUMENT | EmbedEnumType.VIDEO | EmbedEnumType.IMAGE
    data:  Array<MediaEditionNSFW | MediaUploadNSFW>
}

export type EmbedPollForm = {
    type: EmbedEnumType.POLL
    data: PollForm
}
export type EmbedCreation = EmbedMediaCreation | EmbedGalleryCreation | EmbedPollForm

export type EmbedGalleryEdition = {
    type: EmbedEnumType.GALLERY
    data: GalleryPreForm
}


export type EmbedEdition = EmbedMediaEdition | EmbedGalleryEdition | EmbedPollForm

export interface EmbedForm {
    type: EmbedEnumType,
    data: any
}

export const ACCEPTED_FILETYPE: Record<EmbedEnumType, string> = {
    [EmbedEnumType.IMAGE]: ".png,.jpg,.jpeg,.gif",
    [EmbedEnumType.VIDEO]: ".mp4,.webm",
    [EmbedEnumType.DOCUMENT]: "*",
    [EmbedEnumType.GALLERY]: "*",
    [EmbedEnumType.POLL]: "*"
}

export const DEFAULT_EMBED: Record<EmbedEnumType, EmbedCreation> = {
    [EmbedEnumType.GALLERY]: {
        type: EmbedEnumType.GALLERY,
        data: {
            name: "",
            feed: 1,
            pseudo: false,
            images: []
        }
    },
    [EmbedEnumType.DOCUMENT]: {
        type: EmbedEnumType.DOCUMENT,
        data: []
    },
    [EmbedEnumType.POLL]: {
        type: EmbedEnumType.POLL,
        data: {
            title: "",
            choices: [{content: ""}],
            multiple: false,
            anonymous: true,
            endsAt: new Date(Date.now() + (6.048e+8)) // One week from now
        }
    },
    [EmbedEnumType.IMAGE]: {
        type: EmbedEnumType.IMAGE,
        data: []
    },
    [EmbedEnumType.VIDEO]: {
        type: EmbedEnumType.VIDEO,
        data: []
    },
}

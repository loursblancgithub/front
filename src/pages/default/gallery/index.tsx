import React, {useCallback, useEffect, useMemo, useState} from "react"
import {Link, useParams} from "react-router-dom"
import {Gallery as GalleryType} from "../../../data/gallery/types"
import {Avatar, Button, message, Modal, Skeleton, Tooltip} from "antd"
import PhotoGallery, {renderImageClickHandler} from "react-photo-gallery"
import {deleteGallery, deleteGalleryImages, getGallery} from "../../../data/gallery"
import LoadingGallery from "../../../components/Gallery/LoadingGallery/LoadingGallery"
import {useTranslation} from "react-i18next"
import {useHistory} from "react-router-dom"
import {AvatarSizes, GallerySizes} from "../../../constants/MediaSizes"
import SelectableImage from "../../../components/Gallery/SelectableImage"
import GalleryAdder from "../../../components/Gallery/GalleryAdder"
import {Image as ImageType} from "../../../data/media/types"
import {parsePhotosAsync, mediaPath, SafePhoto, ParserFunction} from "../../../util"
import Lightbox from "lightbox-react"
import "lightbox-react/style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons"
import {faEdit, faTrashAlt, faUser} from "@fortawesome/free-regular-svg-icons"

export type SelectablePhoto = SafePhoto & {selected: boolean}
const parserSelectablePhoto: ParserFunction<SelectablePhoto> = (img: ImageType, key: string) => {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = mediaPath(img.name, GallerySizes.PREVIEW)!
        image.onerror = reject
        image.onload = () => resolve({
            key,
            src: image.src,
            width: image.width,
            height: image.height,
            selected: false,
            nsfw: img.nsfw,
            srcSet: img.name
        } as SelectablePhoto)
    })
}


interface ParamTypes {
    id?: string
}

const Gallery: React.FC = () => {
    const {t} = useTranslation(["gallery", "common"])
    const history = useHistory()
    const {id} = useParams<ParamTypes>()
    const picture = useMemo<string | null>(() => new URLSearchParams(window.location.search).get("p"), [window.location.search])

    const [loading, setLoading] = useState<boolean>(true)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [gallery, setGallery] = useState<GalleryType>()
    const [photos, setPhotos] = useState<SelectablePhoto[]>([])

    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>()

    /**
     * Get Gallery and parse photos on first load
     */
    useEffect(() => {
        if (id) {
            getGallery(id).then(res => {
                if (res.data) {
                    setGallery(res.data)
                    parsePhotosAsync(res.data.images, parserSelectablePhoto)
                        .then(photos => {
                            setPhotos(photos)
                            if (picture)
                                setCurrentPhotoIndex(+picture)
                        })
                        .catch(e => {
                            message.error("Error while parsing...")
                            console.log(e)
                        })
                        .finally(() => setLoading(false))
                }
            }).catch(e => message.error(`Get this gallery failed ,${e}`))
        }
    }, [id])

    const handleSelect = useCallback((key: string) => {
        setPhotos(prevState => prevState.map(photo => (
            (photo.key as string) === key) ?
            ({...photo, selected: !photo.selected}) :
            photo
        ))
    }, [])

    const addNewImages = useCallback((images: ImageType[]) => {
        Promise.all(images.map((img, i) => parserSelectablePhoto(img, String(i)))).then(photos => {
            setPhotos(prevState => [...prevState, ...photos])
        }).catch(e => message.error("Error while parsing...", e))
    }, [])

    const removeSelection = useCallback(() => {
        if (gallery)
            Modal.confirm({
                title: t("common:remove_item.title"),
                content: t("common:remove_item.content"),
                okText: "Ok",
                cancelText: t("common:cancel"),
                onOk: async () => {
                    const ids: number[] = []
                    photos.forEach(p => {
                        if (p.selected)
                            ids.push(+(p.key as string))
                    })
                    if (ids.length === photos.length) {
                        deleteGallery(gallery.id).then(() =>
                            message.info(t("common:remove_item.complete"))
                        )
                    } else {
                        deleteGalleryImages(gallery.id, ids)
                            .then(() => {
                                message.success(t("selection_delete"))
                                setPhotos(prevPhotos => prevPhotos.filter(p => !p.selected))
                            })
                            .catch(e => {
                                message.error(t("Une erreur est survenue"))
                                console.log(e)
                            })
                    }
                }
            })
    }, [gallery, photos])

    const openLightbox: renderImageClickHandler = useCallback((e, photo) => {
        if (photo && gallery) {
            setCurrentPhotoIndex(photo.index)
            history.push(`/gallery/${id}?p=${photo.index}`)
        }
    }, [id, gallery])

    const exitEditMode = useCallback(() => {
        setEditMode(false)
        setPhotos(prevState => prevState.map(photo => ({...photo, selected: false})))
    }, [])

    const closeLightbox = useCallback(() => {
        setCurrentPhotoIndex(undefined)
        history.push(`/gallery/${id}`)
    }, [id])

    const removeGallery = useCallback(() =>
        Modal.confirm({
            title: t("common:remove_item.title"),
            content: t("common:remove_item.content"),
            okText: "Ok",
            cancelText: t("common:cancel"),
            onOk: async () => {
                const res = await deleteGallery(gallery!.id)
                if (res.status === 200) {
                    message.info(t("common:remove_item.complete"))
                    history.push("/")
                }
            }
        }), [gallery])

    const imageRenderer = useCallback(({index, key, left, top, photo}: any) => (
        <SelectableImage
            key={key}
            selectable={editMode}
            margin={"2px"}
            index={index}
            photo={photo}
            left={left}
            top={top}
            direction="row"
            onSelect={handleSelect}
            onClick={openLightbox}
        />
    ), [editMode, handleSelect, openLightbox])


    return (
        <div className="w-5/6 mx-auto flex flex-col m-6 mb-20">
            <div className="flex flex-col sm:flex-row justify-between m-2">
                <div>
                    {loading && !gallery ?
                        <Skeleton loading={true} active paragraph={false} className="w-48 mr-2"/> :
                        <>
                            <h1 className="font-bold text-4xl text-gray-700 mb-0">{gallery?.name}</h1>
                            <span className="text-xs text-gray-600">{`${gallery?.images.length} ${t("pictures")}`}</span>
                        </>
                    }
                </div>
                <div className="flex flex-col justify-end">
                    {loading ?
                        <div className="flex flex-row items-center w-fit-content mt-2 h-16 mb-8 ml-auto">
                            <Skeleton loading={loading} active paragraph={false} className="mr-2 w-48"/>
                            <Skeleton avatar={true} loading={loading} active paragraph={false} title={false}/>
                        </div> :
                        <div className="mb-2 w-full text-right">
                            <span className="text-xs text-gray-600">
                                {`${t("posted_date")} ${gallery && new Date(gallery.creation).toLocaleDateString()} ${t("by")}`}
                            </span>
                            <Tooltip title={gallery?.club.name}>
                                <Link to={"/club/1"}>
                                    <Avatar
                                        src={mediaPath(gallery?.club.logoUrl, AvatarSizes.THUMBNAIL)}
                                        shape="circle"
                                        className=" ml-2 leading-tight hover:opacity-75 hover:shadow-outline cursor-pointer"
                                        icon={<FontAwesomeIcon icon={faUser}/>}
                                    />
                                </Link>
                            </Tooltip>
                        </div>
                    }
                    {gallery?.hasRight && editMode ?
                        <div className="flex flex-col items-end">
                            <Button type="primary" className="shadow-md rounded mx-1" style={{width: "max-content"}} onClick={exitEditMode}>
                                {t("common:back")}
                                <FontAwesomeIcon
                                    icon={faSignOutAlt}
                                    className="ml-2"
                                />
                            </Button>
                            <div className="flex mt-3">
                                <GalleryAdder club={gallery.club.id} gallery={gallery.id} afterUpload={addNewImages}/>
                                <Button className="rounded mx-1" danger onClick={removeSelection}>
                                    {t("delete_selection")}
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        className="ml-2"
                                    />
                                </Button>
                            </div>
                        </div> :
                        <div className="flex justify-end">
                            <Button type="primary" className="shadow-md rounded mx-1" onClick={() => setEditMode(true)}>
                                {t("common:edit")}
                                <FontAwesomeIcon
                                    icon={faEdit}
                                    className="ml-2"
                                />
                            </Button>
                            <Button type="primary" className="shadow-md rounded mx-1" danger onClick={removeGallery}>
                                {t("common:delete")}
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    className="ml-2"
                                />
                            </Button>
                        </div>
                    }
                </div>
            </div>
            <div className="p-1">
                {loading ?
                    <LoadingGallery/> :
                    <PhotoGallery
                        renderImage={imageRenderer}
                        targetRowHeight={200}
                        photos={photos}
                        direction="row"
                    />
                }
            </div>
            {currentPhotoIndex != undefined && gallery && (
                <Lightbox
                    mainSrc={mediaPath(gallery.images[currentPhotoIndex].name, GallerySizes.LIGHTBOX) as string}
                    nextSrc={
                        mediaPath(gallery.images[(currentPhotoIndex + 1) % gallery.images.length].name, GallerySizes.LIGHTBOX)
                    }
                    prevSrc={
                        mediaPath(gallery.images[(currentPhotoIndex + gallery.images.length - 1) % gallery.images.length].name, GallerySizes.LIGHTBOX)
                    }
                    onMovePrevRequest={() => setCurrentPhotoIndex((currentPhotoIndex + gallery.images.length - 1) % gallery.images.length)}
                    onMoveNextRequest={() => setCurrentPhotoIndex((currentPhotoIndex + 1) % gallery.images.length)}
                    onCloseRequest={closeLightbox}
                />
            )}
        </div>
    )
}

export default Gallery

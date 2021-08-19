import React, { useCallback,    useState} from "react"
import {Upload} from "antd"
import "./ImagePicker.css"
import {faEdit, faTrashAlt} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlus, faUndo} from "@fortawesome/free-solid-svg-icons"
import Loading from "./Loading"

const DEFAULT_IMAGE = "img/empty-image.svg"

type ImagePickerProps = {
    className?: string
    defaultImage?: string
    onReset?: () => void
    onChange: (file: File | null) => void
}
const ImagePicker: React.FC<ImagePickerProps> = ({className, defaultImage, onChange, onReset}) => {
    const [image, setImage] = useState<string|undefined>(defaultImage)
    const [loading, setLoading] = useState<boolean>()


    const handleImage = useCallback((file: File) => {
        setLoading(true)
        const reader = new FileReader()
        reader.onload = e => {
            setImage(reader.result as string)
            setLoading(false)
        }
        reader.readAsDataURL(file)

        onChange(file)
        return false
    }, [onChange])

    return (
        <>
            <Upload
                id="image-picker"
                name="avatar"
                listType="picture-card"
                className={`flex justify-center ${className}`}
                showUploadList={false}
                beforeUpload={handleImage}
            >
                {image ?
                    <div className="image-display relative w-full h-full">
                        <div
                            className="w-full h-full bg-white"
                            style={{
                                backgroundImage: `url("${image}")`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        />
                        <span className="image-options absolute text-gray-400">
                            <FontAwesomeIcon icon={faEdit} size="2x" className="px-2 hover:text-white"/>
                            {image === defaultImage ?
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    size="2x"
                                    className="px-2 hover:text-red-400"
                                    onClick={e => {
                                        e.stopPropagation()
                                        setImage(DEFAULT_IMAGE)
                                        onChange(null)
                                    }}
                                /> :
                                <FontAwesomeIcon
                                    icon={faUndo}
                                    size="2x"
                                    className="px-2 hover:text-red-400"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setImage(defaultImage)
                                        onReset && onReset()
                                    }}
                                />
                            }
                        </span>
                    </div>
                    :
                    <div>
                        {loading ? <Loading /> : <FontAwesomeIcon icon={faPlus}/>}
                        <div className="ant-upload-text">Upload</div>
                    </div>
                }
            </Upload>
        </>
    )
}
ImagePicker.defaultProps = {
    className: "",
    defaultImage: DEFAULT_IMAGE
}

export default ImagePicker

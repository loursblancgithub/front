import {useLocation} from "react-router-dom"
import {Entity} from "./data/request.type"
import {format} from "date-fns"
import {enUS, fr} from "date-fns/locale"
import {Student} from "./data/student/types"

const locales: { [id: string]: Locale } = {
    en: enUS,
    fr
}
export const _format = (date: Date | number, formatStr = "PP"): string =>
    format(date, formatStr, {
        locale: locales[localStorage.getItem("lng") || "fr"]
    })


export const randomBackgroundColors = () => {
    const colors: string[] = ["gray", "red", "orange", "yellow", "green", "teal", "bule", "indigo", "purple", "pink"]
    const opacities: number[] = [300, 400, 500, 600]
    const randomColor: string = colors[Math.floor(Math.random() * colors.length)]
    const randomOpacity: number = opacities[Math.floor(Math.random() * opacities.length)]
    return `bg-${randomColor}-${randomOpacity}`
}

export const getInitials = (student: Student) => {
    return (student.firstName.substring(0, 1) + student.lastName.substring(0, 1)).toUpperCase()
}

export const getEducationYear = (graduationYear: number): string => {
    const educationsYear = ["Diplomé", "A3", "A2", "A1", "SUP", "SUP"]

    const date = new Date()
    // If we are only at the beginning of the year (before July, 8th) we still are in previous school's year
    const schoolYear = date.getMonth() < 8 ? date.getFullYear() - 1 : date.getFullYear()

    return educationsYear[Math.min(Math.max(0, graduationYear - schoolYear), educationsYear.length - 1)]
}

export const useQuery = (): URLSearchParams => new URLSearchParams(useLocation().search)



export const isFileImage = (file: { type: string }): boolean => ["image/gif", "image/jpeg", "image/png"].includes(file.type)

export const mediaPath = (fullPath?: string, size?: string): string | undefined => {
    if(fullPath){
        const storageUrl = process.env.STORAGE_URL || "https://iseplife.s3.eu-west-3.amazonaws.com"
        if (size) {
            const [_, path, filename, __] = fullPath.split(/(.*)\/(.*)/)
            fullPath = `${path}/${size}/${filename}`
        }

        return `${storageUrl}/${fullPath}`
    }
    return fullPath
}

export class EntitySet<T extends Entity> {
    private items: Map<number, T>

    constructor() {
        this.items = new Map()
    }

    contains(entity: Entity): boolean {
        return this.items.has(entity.id)
    }

    add(entity: T): EntitySet<T> {
        if (!this.contains(entity))
            this.items.set(entity.id, entity)
        return this
    }

    addAll(entities: T[]): EntitySet<T> {
        entities.forEach(e => this.add(e))
        return this
    }

    remove(entity: T): EntitySet<T> {
        this.items.delete(entity.id)
        return this
    }

    clear(): EntitySet<T> {
        this.items = new Map()
        return this
    }

    isEmpty(): boolean {
        return this.count() === 0
    }

    count(): number {
        return this.items.size
    }

    filter(callbackFn: (val: T) => boolean): T[] {
        const filteredEntities: T[] = []
        this.items.forEach((entity) => {
            if (callbackFn(entity))
                filteredEntities.push(entity)
        })
        return filteredEntities
    }
}

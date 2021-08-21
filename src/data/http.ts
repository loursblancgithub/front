import axios, {AxiosInstance} from "axios"
import {JSONDateParser} from "../util"

const url = process.env.REACT_APP_API_URL || "192.168.1.47:8080"

export const apiURI = `${process.env.REACT_APP_HTTP_PROTOCOL || "http"}://${url}`
export const wsURI = `${process.env.PUBLIC_URL || "ws"}://${url}/ws`

export let apiClient: AxiosInstance

export function initializeAPIClient(): AxiosInstance {
    return apiClient = axios.create({
        baseURL: apiURI,
        headers: {
            common: {
                "Access-Control-Max-Age": "3600"
            }
        },
        transformResponse: (response, req) => req["content-type"] === "application/json" ? JSON.parse(response, JSONDateParser) : response
    })
}
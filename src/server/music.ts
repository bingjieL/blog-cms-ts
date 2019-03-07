import request from '@/server/request'
import { hostUrl } from '@/server/apiConfig'

export const AddApi = (params: object) => {
    return request.post(`${hostUrl}/api/music/add`, params)
}

export const GetApi = (params: object) => {
    return request.post(`${hostUrl}/api/music/get`, params)
}

export const UpdateApi = (params: object) => {
    return request.post(`${hostUrl}/api/music/update`, params)
}

export const FindByIdApi = (params: object) => {
    return request.post(`${hostUrl}/api/music/getById`, params)
}

export const DeleteApi = (params: object) => {
    return request.post(`${hostUrl}/api/music/delete`, params)
}
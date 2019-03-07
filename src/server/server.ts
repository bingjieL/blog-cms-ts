import request from '@/server/request'
import { hostUrl } from '@/server/apiConfig'

export const AddApi = (params: object) => {
    return request.post(`${hostUrl}/api/blogType/add`, params)
}

export const GetApi = (params: object) => {
    return request.post(`${hostUrl}/api/blogType/get`, params)
}

export const UpdateApi = (params: object) => {
    return request.post(`${hostUrl}/api/blogType/update`, params)
}

export const FindByIdApi = (params: object) => {
    return request.post(`${hostUrl}/api/blogType/getById`, params)
}

export const DeleteApi = (params: object) => {
    return request.post(`${hostUrl}/api/blogType/delete`, params)
}
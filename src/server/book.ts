import request from '@/server/request'
import { hostUrl } from '@/server/apiConfig'

export const AddApi = (params: object) => {
    return request.post(`${hostUrl}/api/book/add`, params)
}

export const GetApi = (params: object) => {
    return request.post(`${hostUrl}/api/book/get`, params)
}

export const UpdateApi = (params: object) => {
    return request.post(`${hostUrl}/api/book/update`, params)
}

export const FindByIdApi = (params: object) => {
    return request.post(`${hostUrl}/api/book/getById`, params)
}

export const DeleteApi = (params: object) => {
    return request.post(`${hostUrl}/api/book/delete`, params)
}
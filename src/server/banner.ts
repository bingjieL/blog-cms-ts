import request from '@/server/request'
import { hostUrl } from '@/server/apiConfig'

export const AddApi = (params: object) => {
    return request.post(`${hostUrl}/api/banner/add`, params)
}

export const GetApi = (params: object) => {
    return request.post(`${hostUrl}/api/banner/get`, params)
}

export const UpdateApi = (params: object) => {
    return request.post(`${hostUrl}/api/banner/update`, params)
}

export const FindByIdApi = (params: object) => {
    return request.post(`${hostUrl}/api/banner/getById`, params)
}

export const DeleteApi = (params: object) => {
    return request.post(`${hostUrl}/api/banner/delete`, params)
}
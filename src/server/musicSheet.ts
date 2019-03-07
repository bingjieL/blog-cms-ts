import request from '@/server/request'
import { hostUrl } from '@/server/apiConfig'

export const AddApi = (params: object) => {
    return request.post(`${hostUrl}/api/sheet/add`, params)
}

export const GetApi = (params: object) => {
    return request.post(`${hostUrl}/api/sheet/get`, params)
}

export const UpdateApi = (params: object) => {
    return request.post(`${hostUrl}/api/sheet/update`, params)
}

export const FindByIdApi = (params: object) => {
    return request.post(`${hostUrl}/api/sheet/getById`, params)
}

export const DeleteApi = (params: object) => {
    return request.post(`${hostUrl}/api/sheet/delete`, params)
}
import request from '@/server/request'
import { hostUrl } from '@/server/apiConfig'

export const AddApi = (params: object) => {
    return request.post(`${hostUrl}/api/hotSwiper/add`, params)
}

export const GetApi = (params: object) => {
    return request.post(`${hostUrl}/api/hotSwiper/get`, params)
}

export const UpdateApi = (params: object) => {
    return request.post(`${hostUrl}/api/hotSwiper/update`, params)
}

export const FindByIdApi = (params: object) => {
    return request.post(`${hostUrl}/api/hotSwiper/getById`, params)
}

export const DeleteApi = (params: object) => {
    return request.post(`${hostUrl}/api/hotSwiper/delete`, params)
}


import request from '@/server/request'
import { hostUrl } from '@/server/apiConfig'

export const GetBlogTypeApi = (params: object) => {
    return request.post(`${hostUrl}/api/blogType/get`, params)
}

export const AddApi = (params: object) => {
    return request.post(`${hostUrl}/api/blog/add`, params)
}

export const GetApi = (params: object) => {
    return request.post(`${hostUrl}/api/blog/get`, params)
}

export const UpdateApi = (params: object) => {
    return request.post(`${hostUrl}/api/blog/update`, params)
}

export const FindByIdApi = (params: object) => {
    return request.post(`${hostUrl}/api/blog/getById`, params)
}

export const DeleteApi = (params: object) => {
    return request.post(`${hostUrl}/api/blog/delete`, params)
}
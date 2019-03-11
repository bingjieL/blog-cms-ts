import { UserBasicype } from '../types/userBasic';
import { GetterTree } from 'vuex';

const defaultUserName: string = '~~ 没有发现小主哦！';

export const State: UserBasicype = {
    userName: defaultUserName
}

export const Getters: GetterTree<UserBasicype, any> = {
    
}

import { userBasicType } from '../types/userBasic';
import { GetterTree } from 'vuex';

const defaultUserName: string = '~~ 没有发现小主哦！';

export const State: userBasicType = {
    userName: defaultUserName
}

export const Getters: GetterTree<userBasicType, any> = {
    
}

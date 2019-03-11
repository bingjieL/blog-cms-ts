import { UserBasicype } from '../types/userBasic';
import { MutationTree } from 'vuex';

export const Mutations: MutationTree<UserBasicype> = {
    setBasicInfo(state, payload) {
        state.userName = `${payload.userName} . 小主`
        return state
    },
    clearBasicInfo(state) {
        state.userName = ''
        return state
    }
}

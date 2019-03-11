import {
  ActionTree
} from 'vuex';

import {
  TestTsType
} from '../types/test-ts';

const Actions: ActionTree<TestTsType, any> = {
  add({commit, state}, payload) {
    commit('TEST_ADD', payload)
  }
}

export default Actions;
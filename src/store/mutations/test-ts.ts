import {
  TestTsType
} from '../types/test-ts';

import {
  MutationTree
} from 'vuex';

const MUTATIONS_TYPES = {
  TEST_ADD: 'TEST_ADD',
};

const Mutations: MutationTree<TestTsType> = {
  [MUTATIONS_TYPES.TEST_ADD](state: object, payload: object) {
    return Object.assign(state, payload)
  }
};

export default Mutations;

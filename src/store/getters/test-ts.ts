import {
  TestTsType
} from '../types/test-ts';

import {
  GetterTree,
} from 'vuex';

export const State: TestTsType = {
  sum: 0
}; 

export const Getters: GetterTree<TestTsType, any> = {
  sums: (state: TestTsType) => {
    return state.sum
  }
}


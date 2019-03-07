import Vue from 'vue';
import Vuex from 'vuex';
import Test from './modules/test-ts';

Vue.use(Vuex);


const MUTATIONS_TYPES = {
  TEST_ADD: 'TEST_ADD',
};
export default new Vuex.Store({
  modules: {
    Test
  },
});

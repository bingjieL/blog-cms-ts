import Vue from 'vue';
import Vuex from 'vuex';
import Test from './modules/test-ts';
import UserBasic from './modules/userBasic';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Test,
    UserBasic
  },
});

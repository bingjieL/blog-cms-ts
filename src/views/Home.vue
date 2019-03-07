<template>
  <div class="home">
    <img alt="Vue logo" v-lazy="logo">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <p ref='test'>{{testName}} </p>
    <br/>
    <p>{{stateSum}}数字</p>
  </div>
</template>

<script lang="ts">
const Logo =  require ('@/assets/logo.png');
import { Component, Vue, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { State, Getter  } from 'vuex-class';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  testName: string = 'test - type'
  logo:any = Logo
  @State(state => state.Test.sum) stateSum:any
  get nameCom(): string {
    return `my name is ${this.testName}`;
  }
  get $testRefs():any {
    return this.$refs.test
  }

  @Watch('testName')
  onChildChanged(val:string, oldVal: string) {
    console.log('val :)', val, 'oldVal :)', oldVal);
  }

  testClick() {
    this.$message('这是一条消息提示');
    console.log('click :)', '小老弟 你点我干啥了');
    this.testName = '变一下名字啊';
  }
  
  mounted () {
    this.testClick()
    console.log('---> refs', this.$testRefs.style)
    console.log('---> store', this.$store)
    console.log('---> $nextTick', this.$nextTick(()=>{
    }))
  }
}
</script>

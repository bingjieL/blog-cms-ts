<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ testName }}</div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue
} from 'vue-property-decorator';

@Component({
  
})
export default class About extends  Vue{
  testName: string= 'test - type'
}
</script>

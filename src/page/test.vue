<template>
  <div>
    <router-link to="/home"><Button type="primary">Test</Button></router-link>
    <router-link to="/test/tt1"><Button type="primary">test/test1</Button></router-link>
    <router-link to="/test/tt2"><Button type="primary">test/test2</Button></router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Button, Select,Input } from 'element-ui';
  import {pr} from '@/config/utils'
  export default {
    data(){
      return{

      }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    },
    components: {
      Button, Select,Input
    }
  }
</script>
<style lang="stylus">
  @import '../style/test'
</style>

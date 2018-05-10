<template>
  <div>
    <router-link to="/test"><Button type="primary">Home</Button></router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Button, Select,Input } from 'element-ui';
  import {pr} from '@/config/utils'
  import {getMock} from '@/service/getData'
  export default {
    data(){
      return{
        topics:[]
      }
    },
    created(){
      getMock((data)=>{
        this.topics = data;
      })
    },
    mounted(){
      console.log(this)
    },
    methods:{

    },
    components: {
      Button, Select,Input
    }
  }
</script>
<style lang="stylus">
  @import '../style/home'
</style>

<template>
  <div>
    <FooterItem :activeName="activeName" />
  </div>
</template>
<script>
import footerC from '@/components/footerC.vue'
export default {
  data(){
    return{
       activeName:'ranking',
    }
  },
  components:{
    FooterItem:footerC
  }
}
</script>
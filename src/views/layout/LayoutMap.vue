<template>
  <!--<narbar/>-->
  <div class="layout-container">
    <div>
      <Header/>
    </div>
    <div class="layout-main">
      <div class="layout-right">
        <router-view />
      </div>

    </div>
  </div>

  <!--<AppMain></AppMain>-->
</template>
<style scoped>
  .layout-container{
    height: 100%;
    position: relative;
  }
  .layout-main{
    height: 100%;
    padding-top:60px;
    /*display: flex;*/
    box-sizing: border-box;

  }
  .layout-left{
    width: 260px;
    position: absolute;

  }
  .layout-right{
    flex-grow:1;
    /*margin-left:260px;*/
    /*border: 1px solid #999999;*/
    /*background: #999999;*/
    height: 100%;
    overflow: auto;
    border: 1px solid #171821;
    background: #171821;
    box-sizing: border-box;
    /*>>>>>>> b60977901cf5ea393febf42f78edb4226d0209e2*/
  }
</style>
<script>
  // import NarBar from ''
  import Sidebar from './components/Sidebar'
  import Header from './components/Header'
  // import AppMain from ''
  export default{
    data(){

      return{
        showSidebar:  this.$route.path !='/main/map'
      }
    },
    components:{
      Sidebar,
      Header,
    },
    methods:{
      key() {
        return this.$route.fullPath
      }
    },
    mounted(){

    },
    watch: {
      '$route' (to, from) {
        this.showSidebar = to.path !='/main/map'
      }
    }
  }
</script>

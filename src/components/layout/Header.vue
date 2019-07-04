<template>

    <a-layout-header id="components-layout-demo-fixed" :style="{ position: 'fixed', zIndex: 1, width: '100%',
    backgroundColor:'white',borderBottom: '1px solid #e8e8e8' }">
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/logobg.svg" style="width: 100%;margin-left: 40%">
        </router-link>


      </div>
      <div class="ant-menu-horizontal " :style="{ lineHeight: '64px',float: 'right',borderBottom: 0}">
        <a-button type="primary" ghost :style="{}">Post a job</a-button>
        <router-link to="talent" class="ant-menu-item" style="margin-bottom: 0"  >Talent</router-link>

        <router-link to="recruiter"  class="ant-menu-item" style="margin-bottom: 0" v-if ="$store.state.isUserLoggedIn && $store.state.usertype ==='recruiter' " >My account</router-link>
        <router-link to="developer" class="ant-menu-item" style="margin-bottom: 0" v-if ="$store.state.isUserLoggedIn && $store.state.usertype ==='developer'" >My account</router-link>
        <router-link to="/login" class="ant-menu-item" style="margin-bottom: 0" v-if ="!$store.state.isUserLoggedIn" >Login</router-link>
        <router-link to="/register" class="ant-menu-item" style="margin-bottom: 0" v-if ="!$store.state.isUserLoggedIn" >Sign up</router-link>
        <a>
          <a-button style="margin-bottom: 0;border: 0;-webkit-box-shadow: 0 0 0 rgba(255,255,255,0.01);color: #1890ff" v-if ="$store.state.isUserLoggedIn" @click="logout" >Logout</a-button>
        </a>


      </div>


    </a-layout-header>



</template>

<script>

  export default {
      name: "Header",
      methods:{

        logout () {
          this.$store.dispatch('setToken',null);
          this.$store.dispatch('setUser',null)
          this.$router.push({
            name:'home'
          })
        }
      }

    }
</script>

<style scoped>

#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;

  margin: 0 24px 16px 0;
  float: left;
}
</style>

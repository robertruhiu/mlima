<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <Pageheader/>
        <a-layout-sider
                collapsible
                v-model="collapsed" @click="expand"
                :style="{backgroundColor:'white',marginTop: '4.42%',position:'fixed'}"
        >

            <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh">
                <a-menu-item key="1">
                    <a-icon type="dashboard"/>
                    <span>Dashboard</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="project"/>
                    <span>My jobs</span>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="solution"/>
                    <span>My Candidates</span>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="team"/>
                    <span>Talent Pool</span>
                </a-menu-item>

            </a-menu>
        </a-layout-sider>
        <a-layout style="backgroundColor:#fff">
            <a-layout-header style="background: #fff; padding: 0"/>
            <a-layout-content v-bind:style="expanded" style="margin-left: 14.6%" >


                <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh',marginTop:'0%' }">

                    <h1>Current user is {{this.$store.state.user.email}}</h1>
                    {{currentUserProfile.gender}}






                </div>

            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>
    import Pageheader from '@/components/layout/Dashboardheader.vue'
    import UsersService from '@/services/UsersService'

    export default {
        name: 'index',
        data() {
            return {
                currentUserProfile:null,
                collapsed: false,
                expanded:false,
                styleObject: {

                    marginLeft:'5.9%',
                },
                styleObject2: {

                    marginLeft:'14.6%'
                },

            }
        },
        components: {
            Pageheader,



        },
        async mounted() {
            const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk,auth)).data
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            expand() {
                if (this.collapsed) {
                    this.expanded = this.styleObject;

                }else {
                    this.expanded = this.styleObject2;
                }
            }
        },

    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }

</style>

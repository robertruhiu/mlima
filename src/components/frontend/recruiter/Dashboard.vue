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
                    <router-link to="talent">
                        <a-icon type="team"/>
                        <span>Talent Pool</span>
                    </router-link>

                </a-menu-item>

            </a-menu>
        </a-layout-sider>
        <a-layout style="backgroundColor:#fff">
            <a-layout-header style="background: #fff; padding: 0"/>
            <a-layout-content v-bind:style="expanded" style="margin-left: 14.6%">


                <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh',marginTop:'0%' }">
                    <a-row>
                        <a-col span="24">
                            <div>
                                <h3 style="margin-left: 1.5rem;">Hello
                                    {{(this.$store.state.user.first_name).charAt(0).toUpperCase()+
                                    this.$store.state.user.first_name.slice(1)}}.Welcome to
                                    your Codeln Dashboard</h3>
                                <a-row :gutter="16"
                                       style="padding-right: 2rem;padding-left: 1.5rem;padding-top: 2rem;padding-bottom: 2rem;">
                                    <a-col class="boxes" :span="6">
                                        <a-row class="ant-card actioncards">
                                            <a-col span="8">
                                                <img class="poolavatar" src="../../../assets/images/edit-tools.svg">
                                            </a-col>
                                            <a-col span="16">
                                                <p>Post a Job</p>
                                                <p style="">Get devs for your vacancy</p>


                                            </a-col>


                                        </a-row>
                                    </a-col>
                                    <a-col class="boxes" :span="6">
                                        <a-row class="ant-card actioncards">
                                            <a-col span="8">
                                                <img class="poolavatar" src="../../../assets/images/cv.svg">
                                            </a-col>
                                            <a-col span="16">
                                                <p>Manage Jobs</p>
                                                <p style="">Monitor and manage job applications</p>


                                            </a-col>


                                        </a-row>

                                    </a-col>

                                    <a-col class="boxes" :span="6">
                                        <a-row class="ant-card actioncards">
                                            <a-col span="8">
                                                <img class="poolavatar" src="../../../assets/images/statistics.svg">
                                            </a-col>
                                            <a-col span="16">
                                                <p>My Candidates</p>
                                                <p style="">Manage and track devs picked from talent pool</p>


                                            </a-col>


                                        </a-row>
                                    </a-col>
                                    <router-link to="talent">
                                        <a-col class="boxes" :span="6">
                                            <a-row class="ant-card actioncards">
                                                <a-col span="8">
                                                    <img class="poolavatar" src="../../../assets/images/star.svg">
                                                </a-col>
                                                <a-col span="16">
                                                    <p>Talent Pool</p>
                                                    <p style="">View more devs from our pool</p>


                                                </a-col>


                                            </a-row>
                                        </a-col>
                                    </router-link>

                                </a-row>
                                <a-row style="margin-left: 1.5rem;margin-right: 1.5rem;margin-bottom: 1rem">
                                    <a-col :span="12">

                                        <h3 style="color: #1976D2;font-weight: 550">Recent Jobs</h3>


                                    </a-col>
                                    <a-col :span="12">

                                        <a-button type="primary" style="float: right">
                                            See more
                                            <a-icon type="right"/>
                                        </a-button>


                                    </a-col>

                                </a-row>
                                <a-row :gutter="16" style="margin-left: 1rem;margin-right: 1rem;margin-bottom: 1rem">
                                    <a-col :span="12">
                                        <a-card>
                                            <h3 style="font-weight: bold">Frontend Developer</h3>
                                            <p>
                                              <span>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">react</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">javascript</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">redux</a-tag>

                                            </span>
                                            </p>

                                            <p>
                                                <a-alert style="color:#1976D2;border: 0 " message="Applicant Tracker"
                                                         type="info"/>
                                            </p>

                                            <p>
                                                <a-row>
                                                    <a-col :span="8"><span>Applicants <a-badge count="5"
                                                                                               :numberStyle="{backgroundColor: '#9FC6F2'} "/></span>
                                                    </a-col>
                                                    <a-col :span="8"><span>Testing Stage <a-badge count="3"
                                                                                                  :numberStyle="{backgroundColor: '#92DDDD'} "/></span>
                                                    </a-col>
                                                    <a-col :span="8"><span>Interview Stage <a-badge count="2"
                                                                                                    :numberStyle="{backgroundColor: '#DA92D0'} "/></span>
                                                    </a-col>
                                                </a-row>

                                            </p>
                                            <div style="text-align: center">
                                                <a-button style="width: 60%" type="primary" block>Manage Job</a-button>
                                            </div>


                                        </a-card>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-card>
                                            <h3 style="font-weight: bold">Frontend Developer</h3>
                                            <p>
                                              <span>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">react</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">javascript</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">redux</a-tag>

                                            </span>
                                            </p>

                                            <p>
                                                <a-alert style="color:#1976D2;border: 0 " message="Applicant Tracker"
                                                         type="info"/>
                                            </p>

                                            <p>
                                                <a-row>
                                                    <a-col :span="8"><span>Applicants <a-badge count="5"
                                                                                               :numberStyle="{backgroundColor: '#9FC6F2'} "/></span>
                                                    </a-col>
                                                    <a-col :span="8"><span>Testing Stage <a-badge count="3"
                                                                                                  :numberStyle="{backgroundColor: '#92DDDD'} "/></span>
                                                    </a-col>
                                                    <a-col :span="8"><span>Interview Stage <a-badge count="2"
                                                                                                    :numberStyle="{backgroundColor: '#DA92D0'} "/></span>
                                                    </a-col>
                                                </a-row>

                                            </p>
                                            <div style="text-align: center">
                                                <a-button style="width: 60%" type="primary" block>Manage Job</a-button>
                                            </div>


                                        </a-card>
                                    </a-col>
                                </a-row>


                            </div>
                        </a-col>
                    </a-row>


                </div>

            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>

    import Pageheader from '@/components/layout/Dashboardheader.vue'
    import UsersService from '@/services/UsersService'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";

    export default {
        name: 'index',
        data() {
            return {
                currentUserProfile: null,
                collapsed: false,
                expanded: false,
                image: 'https://unsplash.com/photos/cssvEZacHvQ',
                styleObject: {

                    marginLeft: '5.9%',
                },
                styleObject2: {

                    marginLeft: '14.6%'
                },

            }
        },
        components: {
            ARow,
            ACol,
            Pageheader,


        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route)
            },
            expand() {
                if (this.collapsed) {
                    this.expanded = this.styleObject;

                } else {
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

    .me {
        width: 70px;
        height: 70px;
        color: blue;
    }

    .me:hover {
        fill: red;
    }

    .boxes {

        padding-left: 0;
        padding-right: 0;


    }

    .poolavatar {
        width: 80%;
        margin-top: 0.5rem;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }

    .actioncards {
        width: 16rem;
        border-radius: 3%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        padding: 1rem;
    }


</style>

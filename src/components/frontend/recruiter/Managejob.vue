<template>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">

        <a-layout-sider
                collapsible
                v-model="collapsed" @click="expand"
                :style="{backgroundColor:'white',marginTop: '',position:'fixed'}"
        >
            <div>
                <router-link to="/">
                    <img v-bind:style="logo" src="../../../assets/logobg.svg"
                         style="width: 120px;height: 31px;margin-top: 7%;margin-bottom: 6%;margin-left: 9%">

                </router-link>


            </div>

            <a-menu :defaultSelectedKeys="['2']" mode="inline" style="min-height: 85vh">
                <a-menu-item key="1">
                    <router-link to="recruiter">
                        <a-icon type="dashboard"/>
                        <span>Dashboard</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="5">
                    <a v-on:click="showJobDrawer">
                        <a-icon type="edit"/>
                        <span>Post a job</span>
                    </a>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link to="managejobs">
                        <a-icon type="project"/>
                        <span>My jobs</span>
                    </router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <router-link to="mycandidates">
                        <a-icon type="team"/>
                        <span>My Candidates</span>
                    </router-link>
                </a-menu-item>

                <a-menu-item key="4">
                    <router-link to="talent">
                        <a-icon type="star"/>
                        <span>Talent Pool</span>
                    </router-link>

                </a-menu-item>
                <a-menu-item key="6">
                    <router-link to="talent">
                        <a-icon type="user"/>
                        <span>My profile</span>
                    </router-link>

                </a-menu-item>
                <a-menu-item key="7">
                    <a @click="logout">
                        <a-icon type="export"/>
                        <span>Logout</span>
                    </a>

                </a-menu-item>

            </a-menu>
        </a-layout-sider>
        <a-layout style="backgroundColor:#fff">

            <a-layout-content v-bind:style="expanded" style="margin-left: 14.6%">
                <a-layout-header
                        :style="{ position: 'fixed', zIndex: 1, width: '100%',backgroundColor:'#004ec7',height:'100px' }">
                    <a-row>
                        <a-col :span="4">
                            <p style="color: white;line-height: 61px;font-size: 17px;font-weight:bold">{{greeting}}
                                {{(this.$store.state.user.first_name).charAt(0).toUpperCase()+
                                this.$store.state.user.first_name.slice(1)}}</p>
                            <p style="color: white;font-size: 12px;font-weight: bold;line-height: 0;">4 interviews Today</p>
                        </a-col>


                        <a-col :span="4">
                            <a-card class="events">
                                <p style="line-height: 0">9:00 am - 10:30 am</p>
                                <p>Dennis Ruhiu</p>

                            </a-card>
                        </a-col>
                        <a-col :span="4">
                            <a-card class="events">
                                <p style="line-height: 0">1:00 pm - 2:00 pm</p>
                                <p>Test User</p>

                            </a-card>
                        </a-col>
                        <a-col :span="4">
                            <a-card class="events">
                                <p style="line-height: 0">2:30 pm - 3:30 pm</p>
                                <p>Jessica Freeman</p>

                            </a-card>
                        </a-col>
                        <a-col :span="4">
                            <a-card class="events">
                                <p style="line-height: 0">2:30 pm - 3:30 pm</p>
                                <p>Jessica Freeman</p>

                            </a-card>
                        </a-col>


                    </a-row>

                </a-layout-header>


                <div :style="{ padding: '24px', background: '#fff', minHeight: '80vh',marginTop:'6rem' }">


                    <a-row :gutter="16" style="margin-left: 1rem;margin-right: 1rem;margin-bottom: 1rem">
                        <a-col :span="24">
                            <a-row>
                                <a-col :span="5">
                                    <a-card title="Jobs Overview"
                                            style="position:fixed;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">

                                        <p><span>Total Applicants <a-badge count="5"
                                                                           :numberStyle="{backgroundColor: '#9FC6F2'} "/></span>
                                        </p>
                                        <p><span>Testing Stage <a-badge count="3"
                                                                        :numberStyle="{backgroundColor: '#92DDDD'} "/></span>
                                        </p>
                                        <p><span>Interview Stage <a-badge count="2"
                                                                          :numberStyle="{backgroundColor: '#DA92D0'} "/></span>
                                        </p>
                                        <p><span>Calendar Events <a-badge count="6"
                                                                          :numberStyle="{backgroundColor: '#c7cddf'} "/></span>
                                        </p>
                                        <a-button type="primary">View Calendar</a-button>
                                    </a-card>


                                </a-col>
                                <a-col :span="16">
                                    <a-row>
                                        <a-col :span="24">
                                            <a-card style="margin-bottom: 1%">
                                                <h3 style="font-weight: bold">Frontend Developer</h3>
                                                <p>
                                              <span>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">react</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">javascript</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">redux</a-tag>

                                            </span>
                                                </p>

                                                <p>
                                                    <a-alert style="color:#1976D2;border: 0 "
                                                             message="Applicant Tracker"
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
                                                    <a-button style="width: 60%" type="primary" block>Manage Job
                                                    </a-button>
                                                </div>


                                            </a-card>
                                        </a-col>
                                        <a-col :span="24">
                                            <a-card style="margin-bottom: 1%">
                                                <h3 style="font-weight: bold">Frontend Developer</h3>
                                                <p>
                                              <span>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">react</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">javascript</a-tag>
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">redux</a-tag>

                                            </span>
                                                </p>

                                                <p>
                                                    <a-alert style="color:#1976D2;border: 0 "
                                                             message="Applicant Tracker"
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
                                                    <a-button style="width: 60%" type="primary" block>Manage Job
                                                    </a-button>
                                                </div>


                                            </a-card>
                                        </a-col>

                                    </a-row>

                                </a-col>
                            </a-row>

                        </a-col>

                    </a-row>


                </div>

            </a-layout-content>

        </a-layout>
    </a-layout>
</template>


<script>



    import UsersService from '@/services/UsersService'
    import ACol from "ant-design-vue/es/grid/Col";
    import ARow from "ant-design-vue/es/grid/Row";

    export default {
        name: 'Managejob',
        data() {
            return {
                currentUserProfile: null,
                collapsed: false,
                expanded: false,
                greeting: null,
                logo: false,
                date: null,
                styleObject: {

                    marginLeft: '5.9%',
                },
                styleObject2: {

                    marginLeft: '14.6%'
                },
                expandedlogo: {
                    width: '120px',
                    height: '31px',
                    marginTop: '7%',
                    marginLeft: '9%',
                    marginBottom: '6%'

                },
                contractedlogo: {
                    width: '100%',
                    height: '31px',
                    marginTop: '7%',
                    marginLeft: '1%',
                    marginBottom: '7%'
                }

            }
        },
        components: {
            ARow,
            ACol,



        },
        async mounted() {
            const auth = {
                headers: {Authorization: 'JWT ' + this.$store.state.token}

            }
            this.currentUserProfile = (await UsersService.currentuser(this.$store.state.user.pk, auth)).data
            let today = new Date()
            let curHr = today.getHours()
            this.date = today.getDay()

            if (curHr < 12) {
                this.greeting = 'Good Morning'

            } else if (curHr < 18) {
                this.greeting = 'Good Afternoon'

            } else {
                this.greeting = 'Good Evening'

            }
        },
        methods: {
            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null)
                this.$router.push({
                    name: 'home'
                })
            },
            expand() {
                if (this.collapsed) {
                    this.expanded = this.styleObject;
                    this.logo = this.contractedlogo;

                } else {
                    this.expanded = this.styleObject2;
                    this.logo = this.expandedlogo;

                }
            },
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

    .events {
        width: 11rem;
        height: 5rem;
        margin-top: 0.5rem;
        border-radius: 0;
        background-color: #0064ff;
        border: 0;
        color: white;
    }


</style>

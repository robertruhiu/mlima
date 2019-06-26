<template>

    <a-layout :style="{background:'#fff'}">
        <pageheader></pageheader>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '3%' }">

            <div :style="{ background: '#fff', padding: '24px', minHeight: '100vh' }">
                <a-row>
                    <a-col :span="10">
                        <div style="margin-top: 15%;margin-left: 14%">
                            <h1 style="font-size:45px;font-weight: 700;color: #007BFF;margin-bottom: 0">Hire Skilled
                                Developers
                                Faster</h1>

                            <h4 style="color: #55A7FF;font-size: 22px">Your ideal developer is only a click away</h4>
                            <router-link to="/talent">
                                <a-button type="primary" :size="large">Hire a Developer</a-button>
                            </router-link>
                            <router-link to="/jobs">
                                <a-button type="primary" style="margin-left: 1rem" ghost :size="large">Find a job
                                </a-button>
                            </router-link>


                        </div>

                    </a-col>


                    <a-col :span="14">
                        <img src="../../../assets/images/props/header_bg.png" style="width: 100%;float: right;">
                        <div>

                        </div>
                    </a-col>


                </a-row>
                <a-row :style="{ padding: '0 5%'  }">
                    <div class="press">
                        <div>
                            <a-row>
                                <a-col :span="6"><img class="pressitemtech" src="../../../assets/images/props/b_tc.png">
                                </a-col>
                                <a-col :span="6"><img class="pressitemseed" src="../../../assets/images/props/b_ss.png">
                                </a-col>
                                <a-col :span="6"><img class="pressitemdisrupt"
                                                      src="../../../assets/images/props/b_da.png">
                                </a-col>
                                <a-col :span="6"><img class="pressitemforbes"
                                                      src="../../../assets/images/props/b_f.png">
                                </a-col>
                            </a-row>
                        </div>
                    </div>
                </a-row>


            </div>
            <div :style="{ background: '#fff', padding: '0rem', minHeight: '70vh' }">
                <div style="background-color: #ffffff;margin: 0 12%">
                    <h3 class="smallheader">works</h3>
                    <h2 class="headers">How Codeln Works</h2>
                    <p>Our process is optimised to enable you to <br> identify and onboard talent</p>

                    <a-row>
                        <a-col :span="8">
                            <a-card class="workscard"
                                    hoverable

                            >
                                <img src="../../../assets/images/props/path1.png"
                                     style="margin: 0 25%;position: absolute">
                                <img
                                        alt="example"
                                        src="../../../assets/images/props/search.png"
                                        style="width: 20%;margin: 0 38%;margin-top: 9%"
                                />


                                <h5 class="ant-card-meta-description"
                                    style="margin-top: 10%;position: absolute;padding: 0 10%;font-size: 16px">We provide
                                    you a unique
                                    pool of verified developers
                                    with varied technologies.You can easily filter them to identify potential candidates
                                    for your job


                                </h5>

                            </a-card>
                        </a-col>
                        <a-col :span="8">
                            <a-card class="workscard"
                                    hoverable

                            >
                                <img src="../../../assets/images/props/path2.png"
                                     style="margin: 0 25%;position: absolute">
                                <img
                                        alt="example"
                                        src="../../../assets/images/props/pick.png"
                                        style="width: 20%;margin: 0 38%;margin-top: 9%"
                                />


                                <h5 class="ant-card-meta-description"
                                    style="margin-top: 10%;position: absolute;padding: 0 10%;font-size: 16px">We provide
                                    you a unique
                                    pool of verified developers
                                    with varied technologies.You can easily filter them to identify potential candidates
                                    for your job


                                </h5>

                            </a-card>
                        </a-col>
                        <a-col :span="8">
                            <a-card class="workscard"
                                    hoverable

                            >
                                <img src="../../../assets/images/props/path3.png"
                                     style="margin: 0 25%;position: absolute">
                                <img
                                        alt="example"
                                        src="../../../assets/images/props/coding.png"
                                        style="width: 20%;margin: 0 38%;margin-top: 9%"
                                />


                                <h5 class="ant-card-meta-description"
                                    style="margin-top: 10%;position: absolute;padding: 0 10%;font-size: 16px">We provide
                                    you a unique
                                    pool of verified developers
                                    with varied technologies.You can easily filter them to identify potential candidates
                                    for your job


                                </h5>

                            </a-card>
                        </a-col>
                    </a-row>
                </div>

            </div>

            <div :style="{ background: '#fff', padding: '31px', minHeight: '400px' }">
                <a-row style="margin-top: 5%">
                    <a-col :span="10">
                        <img src="../../../assets/images/props/talent_profile_bg.png"
                             style="width: 100%;margin-top: 30%">
                    </a-col>
                    <a-col :span="14">
                        <div style="margin-left: 7%">
                            <h3 class="smallheader">talent pool</h3>
                            <h2 class="headers">Our Talent Pool</h2>
                            <p>We believe that your ideal developer <br>should be only a click away,take advantage <br>
                                of some of our
                                filters to easily access<br> candidates </p>
                            <div v-for="dev in devs" v-bind:key="dev.id">
                                {{dev}}
                            </div>
                            <a-row class="ant-card talentcard"
                                   style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                                <a-col :span="4" style="padding: 5%">
                                    <a-avatar class="poolavatar">DR</a-avatar>
                                </a-col>
                                <a-col :span="15" style="padding-top: 3%;padding-left: 4%;padding-bottom: 2%">
                                    <p class="ant-card-meta-description">Fullstack Developer</p>
                                    <p class="ant-card-meta-description">Fast iterator in technology with a strong
                                        working
                                        background on the node js framework.Abstract thinker
                                        challenging the normal thought process,fun to be around (9gager) </p>
                                    <div>
                                        <a-tag color="#2db7f5">#f50</a-tag>
                                        <a-tag color="#2db7f5">#2db7f5</a-tag>
                                        <a-tag color="#2db7f5">#87d068</a-tag>
                                        <a-tag color="#2db7f5">#108ee9</a-tag>
                                    </div>
                                </a-col>
                                <a-col :span="5" style="padding-top: 3%;">
                                    <div>

                                        <a-tag color="#2db7f5">#2db7f5</a-tag>
                                        <a-tag color="#2db7f5">#2db7f5</a-tag>


                                    </div>
                                </a-col>

                            </a-row>
                            <a-row class="ant-card talentcard"
                                   style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                                <a-col :span="4" style="padding: 5%">
                                    <a-avatar class="poolavatar">DR</a-avatar>
                                </a-col>
                                <a-col :span="15" style="padding-top: 3%;padding-left: 4%;padding-bottom: 2%">
                                    <p class="ant-card-meta-description">Fullstack Developer</p>
                                    <p class="ant-card-meta-description">Fast iterator in technology with a strong
                                        working
                                        background on the node js framework.Abstract thinker
                                        challenging the normal thought process,fun to be around (9gager) </p>
                                    <div>
                                        <a-tag color="#2db7f5">#f50</a-tag>
                                        <a-tag color="#2db7f5">#2db7f5</a-tag>
                                        <a-tag color="#2db7f5">#87d068</a-tag>
                                        <a-tag color="#2db7f5">#108ee9</a-tag>
                                    </div>
                                </a-col>
                                <a-col :span="5" style="padding-top: 3%;">
                                    <div>

                                        <a-tag color="#2db7f5">#2db7f5</a-tag>
                                        <a-tag color="#2db7f5">#2db7f5</a-tag>


                                    </div>
                                </a-col>

                            </a-row>
                            <a-row class="ant-card talentcard"
                                   style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                                <a-col :span="4" style="padding: 5%">
                                    <a-avatar class="poolavatar">DR</a-avatar>
                                </a-col>
                                <a-col :span="15" style="padding-top: 3%;padding-left: 4%;padding-bottom: 2%">
                                    <p class="ant-card-meta-description">Fullstack Developer</p>
                                    <p class="ant-card-meta-description">Fast iterator in technology with a strong
                                        working
                                        background on the node js framework.Abstract thinker
                                        challenging the normal thought process,fun to be around (9gager) </p>
                                    <div>
                                        <a-tag color="#2db7f5">#f50</a-tag>
                                        <a-tag color="#2db7f5">#2db7f5</a-tag>
                                        <a-tag color="#2db7f5">#87d068</a-tag>
                                        <a-tag color="#2db7f5">#108ee9</a-tag>
                                    </div>
                                </a-col>
                                <a-col :span="5" style="padding-top: 3%;">
                                    <div>

                                        <a-tag color="#2db7f5">#2db7f5</a-tag>
                                        <a-tag color="#2db7f5">#2db7f5</a-tag>


                                    </div>
                                </a-col>

                            </a-row>


                        </div>
                    </a-col>
                    <a-col :span="24">
                        <div class="center">
                            <p style="text-align: center">
                                <a-button type='primary'
                                          style="width: 10rem;color: white;height: 3rem;border-radius: 23px">View more
                                    Talent
                                </a-button>
                            </p>
                        </div>
                    </a-col>
                </a-row>
            </div>
            <div :style="{ background: '#fff', padding: '31px', minHeight: '50vh' }">
                <a-row>
                    <a-col :span="24">
                        <h3 class="smallheader" style="text-align: center">Why Us</h3>
                        <h2 class="headers" style="text-align: center">Why Should You Hire us</h2>


                    </a-col>
                </a-row>
                <a-row :gutter="48" :style="{marginTop: '4rem',padding:'0 6rem'}">
                    <a-col :span="8">
                        <img class="imagecenter" src="../../../assets/images/props/hire_icon.png"/>
                        <h3 class="" style="text-align: center">Verified Developers</h3>
                        <p style="text-align: center">
                            As Codeln we facilitate skill verification of candidate before
                            they are presented to the talent pool thus ensuring quality of skill.
                        </p>


                    </a-col>
                    <a-col :span="8">
                        <img class="imagecenter" src="../../../assets/images/props/time-management.png"/>
                        <h3 style="text-align: center">Cost Efficient</h3>
                        <p style="text-align: center">
                            Our process aims to facilitate a rapid hire thus enabling
                            you to cut back on costs caused by downtime

                        </p>


                    </a-col>
                    <a-col :span="8">
                        <img class="imagecenter" src="../../../assets/images/props/analytics.png"/>
                        <h3 style="text-align: center">Robust Applicant System</h3>
                        <p style="text-align: center">We ensure that you enjoy a fluid candidate management
                            from when you identify them up to your choice to hire them.</p>


                    </a-col>
                </a-row>

            </div>

            <div :style="{  padding: '31px', minHeight: '400px' }">

                <img class="" src="../../../assets/images/props/testimony_bg.png"
                     style="margin-left: -15rem;width:97.5rem;position: absolute"/>


                <a-row :gutter="48" :style="{marginTop: '7rem',padding:'0 3rem'}">
                    <a-col :span="6">

                        <h3 class="smallheader">Testimonials</h3>
                        <h2 class="headers" style="font-weight: 600">Client Success Stories</h2>


                    </a-col>
                    <a-col :span="18" style="padding-left: 0;padding-right: 0">



                    </a-col>

                </a-row>


            </div>
            <div :style="{  padding: '31px', minHeight: '55vh' }">
                <h2 class="headers" style="text-align: center;font-weight: 600">We Are Proudly <br>
                Supported By
                </h2>
                <a-row :gutter="48" :style="{marginTop: '5rem',padding:'0 6rem'}">
                    <a-col :span="6">

                        <img  class="imagecenter"  style="width: 70%;margin-top: 1rem" src="../../../assets/images/props/b_mest.png"
                     />


                    </a-col>
                    <a-col :span="6" style="padding-left: 0;padding-right: 0">
                        <img style="width: 30%" class="imagecenter"  src="../../../assets/images/props/b_7a.png"
                     />
                    </a-col>
                    <a-col :span="6">

                        <img class="imagecenter"  style="width: 50%;margin-top: 0.5rem"  src="../../../assets/images/props/b_DIV.png"
                     />


                    </a-col>
                    <a-col :span="6" style="padding-left: 0;padding-right: 0">
                        <img class="imagecenter" style="width: 40%;margin-top: 1rem" src="../../../assets/images/props/b_enpact.png"
                     />
                    </a-col>

                </a-row>

            </div>


        </a-layout-content>
        <Footer/>
    </a-layout>

</template>


<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import UsersService from '@/services/UsersService'

    export default {

        name: 'home',
        data() {
            return {
                devs: null,

            }
        },

        components: {
            ACol,
            ARow,

            Pageheader,
            Footer,

        },
        async mounted() {
            this.devs = (await UsersService.devs()).data;

        },
        methods: {},


    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
        list-style-type: none;
    }

    ul a {
        color: #fff;
        text-decoration: none;
        transition: .2s ease-in;
    }

    .press {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        height: 80px;
        margin-top: -10%;
        background-color: #F0F9FE;
        border-radius: 3px;
    }

    .pressitemtech {
        width: 48%;
        margin-top: 1rem;
        margin-left: 23%;


    }

    .pressitemseed {
        width: 50%;
        margin-top: 1.4rem;
        margin-left: 23%;


    }

    .pressitemdisrupt {
        width: 27%;
        margin-top: 1rem;
        margin-left: 23%;


    }

    .pressitemforbes {
        width: 28%;
        margin-top: 2rem;
        margin-left: 23%;


    }

    .smallheader {
        color: #B627A1;
        margin-bottom: 0;

    }

    .headers {
        color: #007BFF;
        font-size: 22px;
    }

    .workscard {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        width: 18rem;
        height: 20rem;
        background-color: white;
        border: 0
    }

    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #B627A1;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;

        padding: 10px;
    }

    .imagecenter {
        display: block;
        margin-left: auto;
        margin-right: auto;

    }




</style>

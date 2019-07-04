<template>
    <a-layout :style="{background:'#fff'}">
        <pageheader></pageheader>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '1rem' }">
            <div style="margin-top: 3rem">
                <a-row style="background-color:#1976D2;margin-bottom: 1rem ">
                    <a-col span="4">
                        <h3 style="color: white;font-size: 2rem;padding-left: 4rem;padding-top: 1.5rem;">Talent</h3>
                    </a-col>
                    <a-col :span="16">

                        <div style="padding: 2rem;" class='center'>

                            <a-auto-complete
                                    :dataSource="dataSource"
                                    style="width: 80%"
                                    placeholder="Search skills like react,javascript,vue python"
                                    v-model="search"

                            >

                                <a-input>
                                    <a-icon slot="suffix" type="search" class="certain-category-icon"/>
                                </a-input>
                            </a-auto-complete>


                            <span>


                            <country-select v-model="country" style="width: 20%;color: #007BFF"
                                            placeholder="location" class="ant-input"
                            />
                            </span>


                        </div>
                    </a-col>
                    <a-col span="4">

                    </a-col>
                </a-row>

                <a-row>

                    <a-col :span="5">
                        <div style="padding-left: 3rem">


                            <div style="padding: 2rem;width: 12rem" class="">
                                <h3 style="color: #0679fb">
                                    <a-icon type="filter" theme="twoTone"/>
                                    Filters

                                </h3>
                                <div :style="{ borderBottom: '1px solid #E9E9E9' }">
                                    <a-checkbox
                                            :indeterminate="indeterminate"
                                            @change="onCheckAllChange"
                                            :checked="checkAll"
                                    >
                                        Availability
                                    </a-checkbox>
                                </div>
                                <br/>
                                <a-checkbox-group :options="plainOptions" v-model="checkedList" @change="onChange"/>

                                <div :style="{ borderBottom: '1px solid #E9E9E9',marginTop: '1rem' }">
                                    <a-checkbox
                                            :indeterminate="indeterminate1"
                                            @change="onCheckAllChange1"
                                            :checked="checkAll1"
                                    >
                                        Experience
                                    </a-checkbox>
                                </div>
                                <br/>
                                <a-checkbox-group :options="plainOptions1" v-model="checkedList1" @change="onChange1">

                                </a-checkbox-group>

                            </div>
                        </div>

                    </a-col>

                    <a-col :span="14">


                        <a-list style="padding-bottom: 2rem"
                                itemLayout="vertical"
                                size="large"
                                :pagination="pagination"
                                :dataSource="filteredList"
                        >

                            <a-list-item class="ant-card" style="margin-bottom: 1rem;
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);padding: 1rem;
                            "
                                         slot="renderItem" slot-scope="item, index" key="item.title">

                                <div>
                                    <a-row>
                                        <a-col span="4">
                                            <a-avatar class="poolavatar"
                                                      style="">
                                                {{item.name}}
                                            </a-avatar>
                                        </a-col>
                                        <a-col span="15">
                                            <h4>Bio</h4>
                                            <p style="">{{item.about}}</p>
                                            <br>
                                            <span style="" v-for="skill in item.skills" v-bind:key="skill.id">
                                                <a-tag color="#F0F6FD" style="color:#007BFF;">{{skill}}</a-tag>

                                            </span>

                                        </a-col>
                                        <a-col span="5">
                                            <div style="padding-top: 1rem;">

                                                <a-tag color="#F0F6FD" style='color: #007BFF'>
                                                    <a-icon type="environment"/>
                                                    {{item.location}}
                                                </a-tag>
                                                <a-tag color="#F7E7F5" style="color: #B82EA4">{{item.availabilty}}
                                                </a-tag>


                                            </div>
                                            <div style="margin-top: 6rem">
                                                <a-button type="primary" ghost @click="showDrawer(item.id)">View
                                                    Profile
                                                </a-button>
                                            </div>


                                        </a-col>


                                    </a-row>
                                </div>


                            </a-list-item>
                        </a-list>


                    </a-col>
                </a-row>

                <a-drawer
                        width=640
                        placement="right"
                        :closable="false"
                        @close="onClose"
                        :visible="visible"
                >

                    <span><p :style="[pStyle, pStyle2]">User Profile
                        <a-button  type="primary"  style="float: right;"
                                  @click="pickcandidate(profile.user)">
                            Pick Candidate
                        </a-button>


                    </p>
                    </span>
                    <p :style="pStyle">{{profile.user}}</p>
                    <p>{{profile}}</p>

                    <p v-if="experience !== null">{{experience}}</p>
                    <p v-else>No work experience</p>
                    <p v-if="portfolio !== null">{{portfolio}}</p>
                    <p v-else>No past projects</p>


                </a-drawer>
            </div>


        </a-layout-content>
        <Footer/>
    </a-layout>


</template>
<script>
    class Developer {
        constructor(id, name, skills, about, location, availabilty) {
            this.id = id;
            this.name = name;
            this.skills = skills;
            this.about = about;
            this.location = location;
            this.availabilty = availabilty
        }
    }


    import "../../../assets/css/styles.css";
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import UsersService from '@/services/UsersService';
    import MarketPlaceService from '@/services/Marketplace'


    const plainOptions = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const defaultCheckedList = ['Fulltime', 'Contract', 'Remote', 'Parttime']
    const plainOptions1 = ['1 year', '2 years', '3 years', '4 years above']
    const defaultCheckedList1 = ['1 year', '2 years', '3 years', '4 years above']
    export default {
        name: 'talent',
        data() {
            return {
                visible: false,
                devs: null,
                alldevs: null,
                search: '',
                profile: {},
                experience: null,
                portfolio: null,
                country: null,
                checkedList: defaultCheckedList,
                indeterminate: true,
                checkAll: false,
                plainOptions,
                checkedList1: defaultCheckedList1,
                indeterminate1: true,
                checkAll1: false,
                mydevs: null,
                tags: [],


                dataSource: ['react', 'angular', 'javascript'],

                plainOptions1,

                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px',
                },
                pStyle2: {
                    marginBottom: '24px'
                },
                listData: [],
                pagination: {
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
                },
                actions: [
                    {type: 'star-o', text: '156'},
                    {type: 'like-o', text: '156'},
                    {type: 'message', text: '2'},
                ],
            }
        },
        components: {
            ACol,
            ARow,
            Pageheader,
            Footer
        },
        async mounted() {
            this.devs = (await UsersService.devs()).data;
            this.alldevs = (await UsersService.allusers()).data;
            for (let j = 0; j < this.alldevs.length; j++) {
                for (let i = 0; i < this.devs.length; i++) {
                    if (this.alldevs[j].id === this.devs[i].id) {
                        let skill_list = this.devs[i].skills.split(',');

                        let id = this.devs[i].id
                        let name = this.alldevs[j].first_name[0].toUpperCase() + this.alldevs[j].last_name[0].toUpperCase()
                        let skills = skill_list
                        let about = this.devs[i].about
                        let location = this.devs[i].country
                        let availabilty = this.devs[i].availabilty
                        let onedev = new Developer(
                            id, name, skills, about, location, availabilty
                        )


                        this.listData.push(onedev)

                    }


                }
            }


        },


        methods: {
            async showDrawer(dev_id) {
                this.visible = true
                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                const requesteddevs = await MarketPlaceService.mydevs(this.$store.state.user.pk, auth)

                this.mydevs = requesteddevs.data
                if (this.mydevs !== null) {
                    let array = this.mydevs.developers.slice(1, -1).replace(/'/g, '').replace(/ /g, '').split(',');
                    let templist = []
                    for (let i = 0; i < array.length; i++) {
                        templist.push(parseInt(array[i]))
                    }
                    this.tags = templist
                    for (let j = 0; j < this.tags.length; j++) {

                }


                }


                this.profile = (await UsersService.talentuser(dev_id)).data
                try {
                    this.experience = (await UsersService.experience(dev_id)).data
                } catch (err) {
                    this.experience = null
                }
                try {
                    this.portfolio = (await UsersService.portfolio(dev_id)).data
                } catch (err) {
                    this.portfolio = null
                }


            },
            async pickcandidate(dev) {

                const auth = {
                    headers: {Authorization: 'JWT ' + this.$store.state.token}

                }
                this.mydevs.push(dev)
                const devpicking = await MarketPlaceService.pickdev(this.$store.state.user.pk, dev, auth).data
                devpicking()
                this.mydevs.push(dev)


            },

            onClose() {
                this.visible = false
            },
            onChange(checkedList) {
                this.indeterminate = !!checkedList.length && (checkedList.length < plainOptions.length)
                this.checkAll = checkedList.length === plainOptions.length
            },
            onCheckAllChange(e) {
                Object.assign(this, {
                    checkedList: e.target.checked ? plainOptions : [],
                    indeterminate: false,
                    checkAll: e.target.checked,
                })
            },
            onChange1(checkedList1) {
                this.indeterminate1 = !!checkedList1.length && (checkedList1.length < plainOptions1.length)
                this.checkAll1 = checkedList1.length === plainOptions1.length
            },
            onCheckAllChange1(e) {
                Object.assign(this, {
                    checkedList1: e.target.checked ? plainOptions1 : [],
                    indeterminate1: false,
                    checkAll1: e.target.checked,
                })
            },
            filterOption(input, option) {
                return option.componentOptions.children[0].text.toUpperCase().indexOf(input.toUpperCase()) >= 0
            }
        },
        computed: {
            filteredList() {
                return this.listData.filter(dev => {

                    return dev.skills.toString().toLowerCase().includes(this.search.toLowerCase())
                })
            }
        }
    }


</script>

<style scoped>
    .poolavatar {
        width: 80px;
        height: 80px;
        line-height: 80px;
        font-size: 30px;
        background-color: #0679FB;
        margin-top: 2rem;
    }

    .talentcard {
        margin-bottom: 1rem;
    }

    .center {
        margin: auto;
        width: 60%;


    }


</style>

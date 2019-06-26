<template>
    <a-layout-sider
                collapsible
                v-model="collapsed" @click="expand"
                :style="{backgroundColor:'white',marginTop: '4.5%',position:'fixed'}"
        >

            <a-menu :defaultSelectedKeys="['1']" mode="inline" style="min-height: 85vh">
                <a-menu-item key="1">
                    <a-icon type="pie-chart"/>
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="desktop"/>
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu
                        key="sub1"
                >
                    <span slot="title"><a-icon type="user"/><span>User</span></span>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu
                        key="sub2"
                >
                    <span slot="title"><a-icon type="team"/><span>Team</span></span>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <a-icon type="file"/>
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
</template>

<script>
    export default {
        name: "RecruiterSider",
        data() {
            return {
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
        methods:{
            expand() {
                if (this.collapsed) {
                    this.expanded = this.styleObject;

                }else {
                    this.expanded = this.styleObject2;
                }
            }
        }
    }
</script>

<style scoped>
    #components-layout-demo-side .logo {
        height: 32px;
        background: rgba(255, 255, 255, .2);
        margin: 16px;
    }
</style>

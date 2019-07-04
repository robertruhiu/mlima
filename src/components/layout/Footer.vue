<template>
    <a-layout-footer style="min-height: 16rem;background-color: #1875d2">
        <a-row :gutter="48" :style="{marginTop: '5rem',padding:'0 6rem'}">
            <a-col :span="6">
                <img class="imagecenter" src="../../assets/logo.svg" style="margin-top: 4rem;width: 50%">
            </a-col>

        </a-row>
        <footer id="footer">
            <div class="footer-wrap">
                <div class="ant-row">
                    <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-6">
                        <div class="footer-center"><h2 style="color: white">Services</h2>
                            <div>
                                <a href="https://github.com/vueComponent/ant-design-vue"
                                   target="_blank ">
                                    Talent
                                </a>

                            </div>
                            <div>
                                <a href="https://ant.design/docs/react/introduce-cn" target="_blank">
                                    Job Board
                                </a>


                            </div>
                            <div>
                                <a href="https://github.com/NG-ZORRO/ng-zorro-antd" target="_blank">Ant
                                    Pricing
                                </a>
                            </div>
                            <div>
                                <a href="https://github.com/websemantics/awesome-ant-design" target="_blank ">

                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-6">
                        <div class="footer-center"><h2 style="color: white">Company</h2>
                            <div><router-link to="privacy">Privacy</router-link></div>
                            <div><router-link to="terms">Terms</router-link></div>

                        </div>
                    </div>
                    <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-6">
                        <div class="footer-center"><h2 style="color: white">Contact</h2>

                            <div class="icons-list">
                                <a href="mailto:info@codeln.com" target="_top">
                                <a-icon  type="message"/>
                                </a>
                                <a class="text-muted" href="https://www.facebook.com/CodelnSpaces/" target="_blank">
                                <a-icon   type="facebook"/>
                                </a>
                                <a class="text-muted" href="https://www.linkedin.com/company/codeln/" target="_blank">
                                <a-icon  type="linkedin"/>
                                </a>
                                <a class="text-muted" href="https://twitter.com/Codeln_spaces" target="_blank">
                                <a-icon   type="twitter" />
                                </a>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </footer>

    </a-layout-footer>
</template>

<script>

    export default {
        name: "Footer",

    }
</script>

<style scoped>
    .imagecenter {
        display: block;
        margin-left: auto;
        margin-right: auto;

    }

    a {
        color: #ffffff;
    }

    .icons-list >>> .anticon {
        margin-right: 6px;
        font-size: 24px;
    }


</style>

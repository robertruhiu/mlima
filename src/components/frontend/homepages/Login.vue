<template>
    <a-layout>

        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '4%' }">

            <div :style="{ background: '#fff', padding: '24px', minHeight: '81vh' }">


                <a-card class="center" v-if="!$store.state.isUserLoggedIn" title="Login" :style="{width:'22rem'}">

                    <p class="alert" v-if="error">{{error}}</p>


                    <a-form
                            id="components-form-demo-normal-login"
                            :form="form"
                            class="login-form"

                    >
                        <a-form-item>
                            <a-input v-model="email"

                                     placeholder="Email"
                            >
                                <a-icon
                                        slot="prefix"
                                        type="user"
                                        style="color: rgba(0,0,0,.25)"
                                />
                            </a-input>
                        </a-form-item>
                        <a-form-item>
                            <a-input v-model="password"

                                     type="password"
                                     placeholder="Password"
                            >
                                <a-icon
                                        slot="prefix"
                                        type="lock"
                                        style="color: rgba(0,0,0,.25)"
                                />
                            </a-input>
                        </a-form-item>
                        <a-form-item>

                            <a
                                    class="login-form-forgot"
                                    href=""
                            >
                                Forgot password
                            </a>
                            <a-button @click="login"
                                      type="primary"
                                      class="login-form-button"
                            >
                                Log in
                            </a-button>
                            Or
                            <router-link to="/register">
                                register now!
                            </router-link>
                        </a-form-item>
                    </a-form>

                </a-card>


            </div>


        </a-layout-content>

        <Footer/>
    </a-layout>
</template>

<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    import AuthService from '@/services/AuthService'
    import User from '@/services/UsersService'

    export default {
        name: 'login',
        components: {
            Pageheader,
            Footer
        },
        data() {
            return {
                email: 'dennis@codeln.com',
                password: 'Pokerface1994',
                error: null,
                usertype: null,
                currentUserProfile: {},
            }
        },
        methods: {
            async login() {
                try {
                    const response = await AuthService.login({
                        email: this.email,
                        password: this.password
                    })
                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                    const auth = {
                        headers: {Authorization: 'JWT ' + this.$store.state.token}

                    }
                    this.currentUserProfile = (await User.currentuser(this.$store.state.user.pk,auth)).data
                    this.$store.dispatch('setUsertype', this.currentUserProfile.user_type)
                    if (this.$store.state.usertype === 'developer') {
                        this.$router.push({
                            name: 'developer'
                        })

                    } else {
                        this.$router.push({
                            name: 'recruiter'
                        })

                    }


                } catch (error) {
                    if (error) {
                        this.error = 'login details incorrect'
                    }


                }
            },


        }
    }
</script>
<style scoped>
    .center {
        margin: auto;
        width: 60%;

        padding: 10px;
    }

    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }

    #components-form-demo-normal-login .login-form-forgot {
        float: left;
    }

    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }

    .alert {
        padding: 8px;
        background-color: #fff1f0;
        border: 1px solid #ffa39e;
    }

</style>

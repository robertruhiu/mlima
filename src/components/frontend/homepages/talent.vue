<template>
    <a-layout>
        <Pageheader/>
        <a-layout-content :style="{ padding: '0 0px', marginTop: '3%' }">

            <div :style="{ background: '#fff', padding: '24px', minHeight: '100vh' }">
                rherhe
            </div>
        </a-layout-content>
        <Footer/>
    </a-layout>

</template>

<script>
    import Pageheader from '@/components/layout/Header.vue'
    import Footer from '@/components/layout/Footer.vue'
    export default {
        name: "talent",
        components: {

            Pageheader,
            Footer,

        },
    }
</script>

<style scoped>

</style>

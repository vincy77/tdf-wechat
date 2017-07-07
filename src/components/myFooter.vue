<template>
    <section class="footer" v-on:click="test">
        <span>{{title}}</span>
    </section>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            title: {
                type: String,
                default: '确定'
            },
            test: {
                type: Function,
                default: function () {}
            }

        },
        mounted: function() {
            console.log('this is nav...');
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    .footer{
        position: fixed;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(-90deg, #4BBBA1 0%, #3699BA 100%);
        height: 1.2rem;
        width: 7.5rem;
        line-height: 1.2rem;
        text-align: center;
        span{
            font-size: 0.34rem;
            color: #FFFFFF;
            letter-spacing: -0.41px;
        }
    }

</style>
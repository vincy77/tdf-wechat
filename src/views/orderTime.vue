<template>
    <section class="ui-container order">
        <my-footer></my-footer>
    </section>
</template>
<script>
    import myFooter from '../components/myFooter.vue'
    export default{
        components: {myFooter},
        data(){
            return {

            }
        },
        methods: {

        },
        mounted: function () {
            console.log('aaa');

        }
    }
</script>
<style lang="scss">
    @import "../style/app.scss";
    .order{
        padding: 0.16rem;

    }


</style>
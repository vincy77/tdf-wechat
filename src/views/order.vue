<template>
    <section class="ui-container order">
        <section class="order-type">
            <ul class="main-content">
                <li class="content-item">
                    <dl class="item-title fl">
                        <dt>宜兴宜喜健康生活</dt>
                        <dd>地址：宜兴市横山家园11-106＃</dd>
                        <dd>时间：2017年5月1日 - 2017年6月1日</dd>
                    </dl>
                    <dl class="item-type order fr">
                        <dt>普通预约</dt>
                        <dd><span>300</span>元／次</dd>
                    </dl>
                </li>
                <li class="content-item">
                    <dl class="item-title fl">
                        <dt>宜兴宜喜健康生活</dt>
                        <dd>地址：佟大夫中医馆佟大夫中医馆佟大夫中医馆佟大夫中医馆</dd>
                        <dd>时间：2017年5月1日 - 2017年6月1日</dd>

                    </dl>
                    <dl class="item-type order fr">
                        <dt>高端预约</dt>
                        <dd><span>600</span>元／次</dd>
                    </dl>
                </li>
            </ul>
            <div class="introduction">
                <span>佟大夫简介</span>
            </div>
            <div class="introduction-detail">
                <div class="sort-icon"><i></i></div>
                <div class="detail">佟台善是著名老中医，对于中医理论、诊断和治疗都有很深的造诣，长期工作在临床第一线，经过多年的临床，更让他对于中医的研究有了更深的认识，并撰写了《中风论》、《温热内蕴脾肾两虚论》等论文，获国家级优秀论文二等奖，在国内疑难病诊治方面享有一定声誉。</div>
                <div class="sort-icon"><i></i></div>
                <div class="detail">擅长治疗：心血管系统疾病、呼吸系统疾病及糖尿病等疑难病症。</div>
            </div>
        </section>
        <my-footer :title="btnTitle" :test="test.bind()"></my-footer>
    </section>
</template>
<script>
    import myFooter from '../components/myFooter.vue'
    export default{
        components: {myFooter},
        data(){
            return {
                btnTitle: '购买'
            }
        },
        methods: {
            test() {
                console.log('aaa');
            }

        },
        mounted: function () {
            console.log('aaa');

        }
    }
</script>
<style lang="scss" scoped>
    @import "../style/app.scss";
    .order{
        font-size: 0.3rem;
        .order-type{
            padding: 0.16rem;
            .main-content{
                .content-item{
                    min-height: 2rem;
                    width: 7.18rem;
                    background-color: #fff;
                    margin-bottom: 0.16rem;
                    .item-title{
                        width: 4.94rem;
                        padding: 0.16rem 0.32rem;
                    }
                    .item-type{
                        width: 2.24rem;
                        background-image: linear-gradient(-90deg, #4BBBA1 0%, #3699BA 100%);

                    }
                }
            }
        }
    }
</style>
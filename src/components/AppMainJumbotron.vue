<script>
import AppMainExpertContact from './AppMainExpertContact.vue';
export default{
    name: 'AppMainJumbotron',
    components: {
        AppMainExpertContact,
    }
}
</script>
<template>
<!-- /Jumbotron -->
<div class="jumbotron">
    <div class="jumbotron-sx">
        <!-- parte testuale del jumbotron-->
        <div class="jumbotron-info">
            <h1>Unlock Your Online Growth Potential</h1>
            <p>Online marketing to secure customer retention,
            leads, and sales. We focuson the bigger picture</p>
            <!-- Bottone del jumbotron-->
            <div class="jumbotron-info-btn">
                <span>Our Services</span>
                <span><img src="../assets/img/icons/arrow-right-solid.svg" alt="" id="classic-arrow"></span>
                <span><img src="../assets/img/icons/arrow-right-solid-white.svg" alt="" id="white-arrow"></span>
            </div>
            <!-- /Bottone del jumbotron-->
        </div>
        <div class="jumbotron-dx">
            <AppMainExpertContact id="ExpertContactOver"/>
        </div>
    </div>  
</div>
<!-- /jumbotron -->
</template>
<style lang="scss">
.jumbotron-sx{
        background-image: url("../assets/img/marketing-intro.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        position: relative;

        .jumbotron-info{
            width: 100%;
            color: #ffffff;
            width: 650px;
            text-align: start;
            padding-left: 300px;
            padding-top: 100px;

            p{
                margin-top: 40px;
            }

            .jumbotron-info-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 23px 23px;
                margin-top: 40px;
                background-color: #ffffff;
                color: #000000;
                width: 210px;
                border-radius: 10px;

                #classic-arrow{
                        margin-left: 10px;
                        display: block;
                    }

                #white-arrow{
                    margin-left: 10px;
                    display: none;
                }

                &:hover{
                    background-color: rgba(0, 0, 0, 0.25);
                    border: 1px solid #ffffff;
                    color: #ffffff;

                    #classic-arrow{
                        display: none;
                    }

                    #white-arrow{
                        display: block;
                    }
                }
        }
            
        }
    }
</style>



<script>
import AppFooterMenu from './AppFooterMenu.vue';
import { store } from '../store';
export default{
    name: 'AppFooter',
    data() {
        return {
            store,
            services: [
                {
                    name: "Marketing Plan",
                    link: "#",
                },
                {
                    name: "Sales Development",
                    link: "#",
                },
                {
                    name: "Digital Marketing",
                    link: "#",
                },
                {
                    name: "Pricing",
                    link: "#",
                },
                {
                    name: "Why Us",
                    link: "#",
                },
                {
                    name: "Case Studies",
                    linrk: "#",
                },
            ],
            resources: [
                {
                    name: "Learning Center",
                    linrk: "#",
                },
                {
                    name: "Video Tutorials",
                    linrk: "#",
                },
                {
                    name: "Customers",
                    linrk: "#",
                },
                {
                    name: "Blog",
                    linrk: "#",
                },
            ],
            company: [
                {
                    name: "Who We Are",
                    linrk: "#",
                },
                {
                    name: "Contact Us",
                    linrk: "#",
                },
                {
                    name: "Carrers",
                    linrk: "#",
                },
            ]
        };
    },
    components: [
        AppFooterMenu,
    ],
    components: { 
        AppFooterMenu,
     }
}
</script>

<template>
<div class="footer-container">
    <!-- Footer Top-->
    <div class="footer-top">
        <!-- Parte sinistra del footer -->
        <div class="footer-top-sx">
            <p>
                Grow Your Online Business strategically, and Improve Customer Retention.
            </p>
            <div class="footer-social-icons" >
                <!-- Icone social generate dinamicamente-->
                <ul>
                    <li v-for="brand in store.socialIcon">
                        <img :src="brand.img" :alt="brand.brand" >
                    </li>
                </ul>    
            </div>
        </div>
        <!-- /Parte sinistra del footer -->
        <!-- Parte destra del footer -->
        <div class="footer-top-dx">
            <div class="footer-top-dx-menu">
                <p>Services</p>
                <!-- Generazione dinamica menu Services-->
                <ul>
                    <AppFooterMenu v-for="link in services"
                    :name="link.name"
                    :link="link.link"/>   
                </ul>        
            </div>
            <div class="footer-top-dx-menu">
                <p>Resources</p>
                <ul>
                    <!-- Generazione dinamica menu Resource-->
                    <AppFooterMenu v-for="link in resources"
                    :name="link.name"
                    :link="link.link"/>   
                </ul>        
            </div>
            <div class="footer-top-dx-menu">
                <ul>
                    <p>Company</p>
                    <!-- Generazione dinamica menu Company-->
                    <AppFooterMenu v-for="link in company"
                    :name="link.name"
                    :link="link.link"/>   
                </ul>        
            </div>
        </div>
        <!-- /Parte destra del footer -->
    </div>
    <!-- /Footer Top-->
    <!-- Footer Bottom-->
    <div class="footer-bottom">
        <p>2020 Avada Consultant Powered by WordPress</p>
        <p>Call Us (555) 802-1234</p>
        <p>info@fattoconilsudoredi.saverio</p>
    </div>
     <!-- /Footer Bottom-->
</div>
<!-- Sezione chat-->
<div class="footer-chat">
    <!-- Icona chat-->
    <div class="footer-chat-icon">
            <img src="../assets/img/icons/comments-solid-white.svg" alt="icona-chat">
    </div>
</div>
</template>

<style lang="scss">
.footer-container{
    width: 1300px;
    margin: 0 auto;
    .footer-top{
        display: flex;
        .footer-top-sx{
            width: 25%;
            text-align: start;

            p{
                font-size: 22px;
            }
            .footer-social-icons ul{
                display: flex;
                padding: 0;
            }
        }
        .footer-top-dx{
            display: flex;
            width: 75%;
            padding-left: 165px;
            .footer-top-dx-menu{
                width: 25%;
                p{
                    text-align: start;
                    font-size: 18px;
                    font-weight: bold;
                }
                ul{
                    text-align: start;
                    padding: 0;
                }
        }
    }
}

.footer-bottom{
    margin-top: 110px;
    display: flex;
    position: relative;
    p:nth-of-type(1){
        margin-right: 160px;
    }
    p:nth-of-type(2){
        margin-right: 370px;
    }
}
}

.footer-chat{
    .footer-chat-icon{
        
        display: flex;
        justify-content: end;
        img{
            background-color: var(--main-orange-color);
            border-radius: 50%;
            margin: 0px 20px 10px 0px;
            padding: 15px;
        }
    
    }
}
</style>
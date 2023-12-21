<script>
import AppHeaderLogo from './AppHeaderLogo.vue';
import AppHeaderMenu from './AppHeaderMenu.vue';
import AppHeaderContacts from './AppHeaderContacts.vue';
export default{
    name: 'AppHeader',
    data(){
        return{
            menuLinks: [
                {
                    name: "Home",
                    link: "#" ,
                },
                {
                    name: "Services",
                    link: "#" ,
                },
                {
                    name: "WhyUs",
                    link: "#" ,
                },
                {
                    name: "Case Studies",
                    link: "#" ,
                },
                {
                    name: "About",
                    link: "#" ,
                },
                {
                    name: "Blog",
                    link: "#" ,
                },
            ]
        } 
    },
    components: {
        AppHeaderLogo,
        AppHeaderMenu,
        AppHeaderContacts,
    }
}
</script>

<template>
    <div class="header-container">
        <AppHeaderLogo />
        <div class="header-menu">
            <!-- Generazione dinamica del menu-->
            <ul class="header-menu-list">
                <AppHeaderMenu v-for="link in menuLinks"
                :name="link.name"
                :link="link.link" />
            </ul>
        </div>
        <AppHeaderContacts />
        <!-- tasto "free quotes"-->
        <div class="header-contacts-quote-btn">
            <p>Free Quote</p>
        </div>
    </div>
</template> 

<style lang="scss">

.header-container{
    padding: 50px;
    width: 1300px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .header-contacts-quote-btn{
        background-color: #ffe7da;
        color: var(--main-orange-color);
        margin-left: 35px;
        border-radius: 10px;

        p{
            padding: 20px  45px;
           
        }
    }
}

.header-menu{
    .header-menu-list{
        display: flex;
        align-items: center;
    }
}
</style>
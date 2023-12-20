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
            <ul class="header-menu-list">
                <AppHeaderMenu v-for="link in menuLinks"
                :name="link.name"
                :link="link.link" />
            </ul>
        </div>
        <AppHeaderContacts />
    </div>
</template> 

<style>
.header-container{
    display: flex;
    align-items: center;
}

.header-menu{
    ul{
        display: flex;
        list-style-type: none;
        
    }
}
</style>
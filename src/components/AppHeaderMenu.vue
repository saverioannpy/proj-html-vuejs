<script>
export default{
    name: 'AppHeaderMenu',
    props: {
        name: String,
        link : String,
    }
}
</script>

<template>
    
    <li>
        <a :href="link">{{ name }}</a>
    </li>
       
</template>

<style lang="scss">
    li{
        margin-left: 35px;
        a{
            color: #000000;

            &:visited{
                color: #000000;
            }

            &:hover{
                color: var(--main-orange-color);
            }
        }
        
    }
</style>
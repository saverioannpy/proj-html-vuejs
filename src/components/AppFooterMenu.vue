<script>
export default{
    name: 'AppFooterMenu',
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
    margin: 30px 25px 0px 0px;
}

</style>

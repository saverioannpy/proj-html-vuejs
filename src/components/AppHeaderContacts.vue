<script>
export default{
    name: 'AppHeaderContacts',
}
</script>

<template>
    <div class="header-contacts">
        <!-- icona phone-->
        <img src="../assets/img/icons/phone-solid.svg" alt="">
        <p id="header-contacts-number">(555) 802-1234</p>
    </div>
</template>

<style lang="scss">
.header-contacts{
    display: flex;
    margin-left: 50px;

    #header-contacts-number{
        margin-left: 17px;
    }
}
</style>
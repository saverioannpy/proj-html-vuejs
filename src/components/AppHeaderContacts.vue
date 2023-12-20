<script>
export default{
    name: 'AppHeaderContacts',
}
</script>

<template>
    <div class="header-contacts">
        <img src="../assets/img/phone-solid.svg" alt="">
        <p>(555) 802-1234</p>
        <div class="header-quote-btn">
            <p>Free Quote</p>
        </div>
    </div>
</template>

<style>
.header-contacts{
    display: flex;
    
    .header-quote-btn{
    background-color: #ffe7da;
    color: #f96c23;
}

}
</style>
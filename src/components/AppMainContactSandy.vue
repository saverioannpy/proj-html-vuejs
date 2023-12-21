<script>
export default{
    name:'AppMainContactSandy',
}
</script>
<template>
<div class="contact-sandy">
            <div class="contact-sandy-img">
                <img src="../assets/img/marketing-expert-cta.png" alt="">
            </div>
            <div class="contact-sandy-info">
                <h3>Sandy Reiff</h3>
                <p>Marketing Consultant Expert</p>
            </div>
            <div class="contact-sady-text">
                <h3>Drive Leads and Sales with Avada</h3>
            </div>
            <div class="contact-sandy-btn">
            <img src="../assets/img/icons/phone-solid.svg" alt="">
            <p id="header-contacts-number">(555) 802-1234</p>
        </div>
        </div>
</template>
<style lang="scss">

.contact-sandy{
    width: 1300px;
    margin: 160px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    
    .contact-sandy-img{
        width: 65px;
        margin-left: 50px;
        img{
            width: 100%;
            border-radius: 50%;
        }
    }

    .contact-sandy-info{
        text-align: start;
        margin-left: 20px;
        margin-right: 70px;

        p{
            margin-top: 0;
            font-size: 14px;
        }
    }

    .contact-sandy-btn{
        padding: 15px 40px;
        margin-left: 200px;
        margin-right: 60px;
        display: flex;
        justify-content: center;
        background-color: #ffe7da;
        color: var(--main-orange-color);
        border-radius: 10px;

        p{
            margin-top: 0;
            margin-left: 8px;
        }
    }
}

</style>
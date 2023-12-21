<script>
import AppHeaderContacts from './AppHeaderContacts.vue';

export default{
    name: 'AppMainExpertContact',
    components: { 
        AppHeaderContacts 
    }
}
</script>
<template>
    <div class="expert-contact">
        <div class="expert-contact-photo">
            <img src="../assets/img/marketing-consultant-expert.jpg" alt="">
        </div>
        <div class="expert-contact-info">
            <h2>Richard Madsen</h2>
            <p>Marketing Consultant Expert</p>
        </div>
        <div class="expert-contacts-phone">
            <!-- icona telefono-->
            <img src="../assets/img/icons/phone-solid.svg" alt="">
            <p id="header-contacts-number">(555) 802-1234</p>
        </div>
        <div class="expert-contact-form">
            <form action="/action_page.php">
                <input type="text" id="fname" name="firstname" placeholder="Your name*">
                <input type="text" id="femail" name="email" placeholder="Your email*">
                <input type="text" id="fnumber" name="phonenumber" placeholder="Your phone number*">
            </form>
        </div>
        <div class="get-a-call-btn">
            <div class="get-a-call-btn-title">
                <p>Get a Callback</p>
            </div>
            <div class="get-a-call-btn-subtitle">
                <p>By submitting my data I agree to be contacted</p>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss">

.expert-contact{
    width: 470px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.314);
    p{
        padding-top: 30px;
    }

    .expert-contact-info{
        padding-top: 20px;
    }

    .expert-contact-photo{
        width: 80px;
        margin-top: 30px;
        img{
            width: 100%;
            border-radius: 50%;
        }
    }

    .expert-contacts-phone{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 30px;
        p {
            color: var(--main-orange-color);
            padding-top: 0;
            padding-left: 5px;
        }

    }

    .expert-contact-form{
        padding: 35px 35px 15px;
        input{
            display:block;
            border: 1px solid #dcdcdc;
            border-radius: 20px;
            margin-top: 20px;
            padding: 20px;
            width: 360px;
        }
    }

    .get-a-call-btn-title{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        background-color: var(--main-orange-color);
        text-align: center;
        width: 360px;
        padding: 20px;
        border-radius: 20px;
        p{
            font-weight: bold;
            padding-top: 0;
        }
    }

    .get-a-call-btn-subtitle{
        p{
            color: #778080;
            font-size: 10px;
            padding: 15px 0px 40px;
        }
    }
    
}
</style>
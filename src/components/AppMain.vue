<script>
import AppMainJumbotron from './AppMainJumbotron.vue';
import AppMainContactSandy from './AppMainContactSandy.vue';
import AppMainCaseStudies from './AppMainCaseStudies.vue';
import { store } from '../store.js';
export default{
    name: 'AppMain',
    components: {
        AppMainContactSandy,
        AppMainJumbotron,
        AppMainCaseStudies,
    },
    data(){
        return{
            store,
        }
    },
}
</script>

<template>
    <!-- Componente Jumbotron-->
    <AppMainJumbotron />
     <!--/Componente Jumbotron-->
    <!-- Get a consultion-->
    <div class="get-a-consultation-container">
        <div class="get-a-consultation">
            <div class="get-a-consultation-img">
                immagine
            </div>
            <div class="get-a-consultation-info">
                <p>Business Growth</p>
                <h1>Increased Brand Awareness</h1>
                <p>
                    Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Sed auctor placerat luctus.
                    Nullam sit amet ante sed orci convallis gravida et at massa.
                </p>
                <div class="get-a-consultation-btn">
                    <p>Get a Consultion</p>
                </div>
            </div>
        </div>
        <div class="get-a-consultation">
            <div class="get-a-consultation-info">
                <p>Investors In People</p>
                <h1>In-House sales Training</h1>
                <p>
                    Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Sed auctor placerat luctus.
                    Nullam sit amet ante sed orci convallis gravida et at massa.
                </p>
                <div class="get-a-consultation-btn">
                    <p>Get a Consultion</p>
                </div>
            </div>
            <div class="get-a-consultation-img">
                immagine
            </div>
        </div>
        <div class="get-a-consultation">
            <div class="get-a-consultation-img">
                immagine
            </div>
            <div class="get-a-consultation-info">
                <p>Social Media Analysis</p>
                <h1>Harness Your Social Proof</h1>
                <p>
                    Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Sed auctor placerat luctus.
                    Nullam sit amet ante sed orci convallis gravida et at massa.
                </p>
                <div class="get-a-consultation-btn">
                    <p>Get a Consultion</p>
                </div>
            </div>
        </div>
    </div>  
    <!-- /Get a consultion-->
    <!-- Brand collaboration-->
    <div class="brand-collaboration">
        <div class="brand-collaboration-header">
            <h1>Some Brands We Work With</h1>
            <p>Quisque aliquet, libeto consequat elementum convallis.</p>
        </div>
       <div class="brand-collaboration-icons">
            <!-- Generazione dinamica delle icone della sezione-->
            <div class="brand-collaboration-icon"  v-for="brand in store.brandIcon">
                <img :src="brand.img" :alt="brand.brand" >
            </div>
        </div>
        <!-- Componente Contatta Esperto-->
        <AppMainContactSandy/>
        <!-- /Componente Contatta Esperto-->
    </div>
    <!-- /Brand collaboration-->
    <!-- Componente Case Studies-->
    <AppMainCaseStudies />
    <!-- /Componente Case Studies-->
</template>

<style lang="scss">
.get-a-consultation{
    width: 900px;
    margin: 150px auto 260px;
    display: flex;
    text-align: start;

    .get-a-consultation-info{
        width: 50%;

        h1{
            margin-bottom: 50px;
        }
    }

    .get-a-consultation-img{
        width: 50%;
        
        img{
            width: 100%;
        }
    }

    .get-a-consultation-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 230px;
        background-color: var(--main-orange-color) ; 
        color: #ffffff;
        border-radius: 10px;
        padding: 20px 40px;
        margin-top: 40px;

        p{
        font-weight: bold
        }
    }

    
}

/**  SCSS: Sezione Brand Collaboration **/
.brand-collaboration{
    
        p{
        margin-top: 30px;
        }


    .brand-collaboration-icons{
        width: 1300px;
        margin: 70px auto 0;
        display: flex;
        justify-content: space-around;

        .brand-collaboration-icon{
            width: 120px;

            img{
                width: 100%;
            }
        }
    }
}
</style>
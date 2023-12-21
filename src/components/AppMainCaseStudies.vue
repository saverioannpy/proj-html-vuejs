<script>
export default{
    name:'AppMainCaseStudies',
}
</script>
<template>
<div class="case-studies">
    <div class="case-studies-title">
        <h1>Trusted by Leading Organisations</h1>
    </div>
    <div class="case-studies-cards">
        <div class="case-studies-card">
            <div class="case-studies-card-img">
                <img src="../assets/img/case-studies-1.jpg" alt="cases 1">
            </div>
            <div class="case-studies-card-text">
                <p>How Spaces Attracted five million visitors by improving the content</p>
            </div>
            <div class="case-studies-card-text-2">
                <h1> 200% </h1>
                <p> High revenue from digital </p>
            </div>
        </div>
        <div class="case-studies-card">
            <div class="case-studies-card-img">
                <img src="../assets/img/case-studies-4.jpg" alt="cases 2">
            </div>
            <div class="case-studies-card-text">
                <p>Creativity helped Hemisferio to increase their brand reach vertically</p>
            </div>
            <div class="case-studies-card-text-2">
                <h1> 10x </h1>
                <p> Sales increased with the same ad spend </p>
            </div>
        </div>
        <div class="case-studies-card">
            <div class="case-studies-card-img">
                <img src="../assets/img/case-studies-6.jpg" alt="cases 3">
            </div>
            <div class="case-studies-card-text">
                <p>How DigitalBox used AI-powered data insight to boost sales</p>
            </div>
            <div class="case-studies-card-text-2">
                <h1> 3-year </h1>
                <p> Partnership with Avada Consultant </p>
            </div>
        </div>
    </div>
</div>
<div class="case-studies-btn-container">
    <div class="case-studies-btn">
        <p>Read More Case Studies</p>
    </div>
</div>
</template>
<style lang="scss">

.case-studies-title{
    margin-top: 160px;
}

.case-studies-cards{
    width: 1300px;
    display: flex;
    margin: 90px auto 0;
    .case-studies-card{
        width: calc(100% / 3 - 45px);
        margin-right: 45px;
        &:hover{
            .case-studies-card-img{
                box-shadow: inset 0px -50px 50px 40px rgba(248,96,15,0.6);
            }
        }
        .case-studies-card-img{
            width: 400px;
            img{
                width: 100%;
                position: relative;
                display: block;
                z-index: -1;
            }   
        }
        .case-studies-card-text{
            border-bottom: 1px dotted #ebebeb;
            padding-bottom: 30px;
            p{
                text-align: start;
                font-size: 28px;
                padding-bottom: 30px;
            }
        }
        .case-studies-card-text-2{
            padding-top: 30px;
            font-size: 15px;
            text-align: start;
            p{
                margin-top: 12px;
            }
        }
    }
}

.case-studies-btn{
    width: 280px;
    margin: 80px auto 130px;
    padding: 20px 0;
    color: #ffffff;
    border-radius: 10px;
    background-color: var(--main-orange-color);

    p{
        font-weight: bold;
    }
}

</style>


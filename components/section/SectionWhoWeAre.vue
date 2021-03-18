<template>
    <section class="who-we-are" id="section-who">
        <div class="container">
            <div class="section-ttl">
                <span class="animatable moveUp">BPLAY GAME</span>
                <h3 class="animatable moveUp">WHO WE ARE?</h3>
            </div>
            <div class="description-cnt animatable moveUp">
                <p>BPlay was founded in 2015 by a group of highly skilled professionals with over 15 years of experience in the 
                    iGaming industry. Today we are an international company with more than 100 employees and have operations 
                    in Malta, Ukraine, Romania, Norway, India, Myanmar and Taiwan...</p>
            </div>
            <div class="experience-igaming">
                <p><span class="number">15</span> <span class="years">YEARS</span></p>
                <p> of experience in the <span class="color-red">iGaming</span></p>
            </div>
        </div>
    </section>
</template>

<style>
.who-we-are{
    position: relative;
    background: url(~/assets/images/maps.png),url(~/assets/images/building.png);
    background-repeat: no-repeat;
    background-position: center 75px, 0 bottom;
    background-size: auto auto, 100% auto;
    padding-bottom: 1110px;
}
.description-cnt{
    width: 824px;
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    /* or 200% */
    text-align: center;
    color: #E6E6E6;
    margin: 0 auto;
}
.experience-igaming{
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 357px;
    height: 452px;
    background: rgba(21, 22, 30, 0.9);
    -moz-border-radius: 0px 0px 20px 20px;
    -webkit-border-radius: 0px 0px 20px 20px;
    border-radius: 0px 0px 20px 20px;
    padding: 31px 64px 0 63px;
    box-sizing: border-box;
    transform: translate(-196%,-30%);
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
}
.experience-igaming .number{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 200px;
    line-height: 234px;
    text-align: center;
    color: #F41616;
    mix-blend-mode: normal;
}
.experience-igaming .years{
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 88px;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
}
.experience-igaming .color-red{
    color: #F41616;
}
.our-products{
    position: relative;
    padding: 235px 0 200px;
    background: #1A1C25 url(~/assets/images/bg_our_products.png) no-repeat 1px 1px;
}
.our-products:after {
  content: "";
  clear: both;
  display: table;
}
.our-products:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -170px;
    background: transparent url(~/assets/images/backroud_wave.png) no-repeat;
    width: 100%;
    height: 281px;
    background-size: 100% auto;
}
.our-products-ttl{
    margin-bottom: 83px;
    overflow: hidden;
}
.our-products .section-ttl{
    float: left;
    margin-right: 105px;
}
.our-products .our-products-des{
    width: 790px;
    float: left;
    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: 1px;
    color: #EAEAEA;
}
@media only screen and (max-width: 640px){
    .description-cnt{
        width: 100%;
    }
    .who-we-are{
        background: url(~/assets/images/maps_sp.png),url(~/assets/images/building_sp.png);
        background-repeat: no-repeat;
        background-position: center 290px, 0 bottom;
        background-size: 100% auto, 100% auto;
        padding-bottom: 580px;
    }
    .experience-igaming{
        transform: translate(-50%,0);
        background: rgba(21, 22, 30, 0.8);
        border-radius: 0px 0px 10px 10px;
        width: 253px;
        height: 281px;
        font-size: 18px;
        line-height: 23px;
        bottom: 90px;
    }
    .experience-igaming .number{
        font-size: 96px;
        line-height: 112px;
    }
    .experience-igaming .years{
        font-size: 26px;
        line-height: 33px;
        color: #FFFFFF;
    }
    .experience-igaming p{
        position: relative;
        margin-bottom: 20px;
    }
    .experience-igaming p:first-child:after{
        content: "";
        position: absolute;
        left: 15px;
        bottom: -11px;
        background: #F41616;
        width: 96px;
        height: 1px;
    }
}
</style>
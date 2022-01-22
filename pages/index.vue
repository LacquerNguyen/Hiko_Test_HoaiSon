<template>
  <div id="wrapper">
    <Header />
    <div class="main-visual">
        <div class="banner-img">
            <img src="~/assets/images/banner.png" alt="" />
        </div>
        <div class="banner-ttl">
            <h2 class="animatable fadeInUp">CASINO PLAYGAME</h2>
        </div>
        <div class="scroll-down">
            <a href="#section-who">Scroll</a>
        </div>
    </div>
    <main>
        <SectionWhoWeAre />
        <SectionOurProducts />
        <SectionPartners />
         <SectionClients />
    </main>
     <Footer />
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
.main-visual{
    position: relative;
}
.main-visual .banner-img img{
    width: 100%;
    height: auto;
}
.main-visual .banner-ttl h2{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-100%);
    display: inline-block;
    font-style: normal;
    font-weight: 800;
    font-size: 96px;
    line-height: 113px;
    text-align: center;
    letter-spacing: 10px;
    mix-blend-mode: normal;
    text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.4);
    z-index: 1;
   background: linear-gradient(180deg, #FFFFFF 0%, #FFECBC 100%);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
}
.scroll-down{
    position: absolute;
    left: 50%;
    bottom: 20%;
    animation: aniScroll 1.5s infinite;
    -moz-animation: aniScroll  1.5s infinite;
    -webkit-animation: aniScroll  1.5s infinite;
    -o-animation: aniScroll  1.5s infinite;
    transform: translateX(-50%);
}
.scroll-down a{
    display: inline-block;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 1px;
    color: #FFFFFF;
    text-decoration: none;
    padding-bottom: 54px;
    background: url(~/assets/images/icon_scroll.png) no-repeat 11px 50px;
}
@keyframes aniScroll {
    0% { bottom: 20%; }
    50% { bottom: 21%; }
    100% { bottom: 20%; }
}
@media only screen and (max-width: 640px){
    .main-visual{
        width: 100%;
        overflow: hidden;
    }
    .main-visual .banner-ttl h2{
        font-weight: 800;
        font-size: 36px;
        line-height: 42px;
    }
    .scroll-down{
        -moz-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    @keyframes aniScroll {
    0% { bottom: 20%; }
    50% { bottom: 21%; }
    100% { bottom: 20%; }
}
    .scroll-down a{
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        background-size: 100% auto;
        background-position: 5px 19px;
        background-size: 62% auto;
        padding-bottom: 30px;
    }
    .main-visual .banner-img img {
        width: 640px;
        margin-left: -342px;
        position: relative;
        left: 50%;
    }
}
</style>

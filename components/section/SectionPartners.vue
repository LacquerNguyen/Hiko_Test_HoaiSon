<template>
    <section class="section-partners">
        <div class="container">
            <div class="partners-lft">
                  <div class="section-ttl">
                    <span class="animatable moveUp">BPLAY GAME</span>
                    <h3 class="animatable moveUp">PARTNERS</h3>
                </div>
                <div class="description-cnt animatable moveUp">
                    <p>As a BPlay client you will benefit from content from more than 20 top tier providers. 
                        Based on your casino’s concept and targeted markets, we will tailor the perfect portfolio of games to offer to your players.</p>
                </div>
                <div class="partners-list">
                    <ul>
                        <li><a href="#"><img src="~/assets/images/sbtech.png" alt="" /></a></li>
                        <li><a href="#"><img src="~/assets/images/iovation.png" alt="" /></a></li>
                        <li><a href="#"><img src="~/assets/images/seon.png" alt="" /></a></li>
                        <li><a href="#"><img src="~/assets/images/hogaming.png" alt="" /></a></li>   
                        <li><a href="#"><img src="~/assets/images/vivo.png" alt="" /></a></li>
                    </ul>
                </div>
            </div>
             <div class="partners-rgt">
                <img src="~/assets/images/partners_img.png" alt="" />
            </div>
        </div>
    </section>

</template>

<style>
.section-partners{
    padding:  400px 0 300px;
    background: transparent url(~/assets/images/partners_bg.png) no-repeat 0 225px;
}
.section-partners .partners-lft{
    float: right;
    margin-right: 35px;
    width: 650px;
}
.section-partners .partners-rgt{
    float: left;
}
.section-partners .section-ttl{
    text-align: left;
    padding-left: 25px;
}
.section-partners .description-cnt{
    width: 500px;
    text-align: left;
    margin: 0;
    padding-left: 25px;
    margin-bottom: 60px;
}
.partners-list ul{
    display: flex;
    list-style: none;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 0;
}
.partners-list ul li{
    width: 33.33%;
    margin-bottom: 30px;
}
@media only screen and (max-width: 640px){
    .section-partners{
        padding: 146px 0 130px;
        -moz-background-size: 343px auto;
        -webkit-background-size: 343px auto;
        background-size: 343px auto;
      background-position: left -25px bottom 107px;
    }
    .section-partners .partners-lft{
        float: none;
        margin-right: 0;
        width: 100%;
    }
    .section-partners .section-ttl{
        text-align: center;
    }
    .section-partners .partners-rgt{
        float: none;
        padding: 0 10px;
    }
    .section-partners .description-cnt{
        width: 100%;
        padding-left: 0;
        margin-bottom: 30px;
        text-align: center;
    }
    .section-partners .partners-rgt img{
        width: 100%;
        height: auto;
    }
     .section-partners .partners-list ul li img{
         width: 100%;
         height: auto;
     }
     .partners-list{
         margin-bottom: 20px;
     }
}
</style>

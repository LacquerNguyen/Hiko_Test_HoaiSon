<template>
    <section class="our-products">
        <div class="container">
            <div class="our-products-ttl">
                <div class="section-ttl">
                    <span class="animatable moveUp">BPLAY GAME</span>
                    <h3 class="animatable moveUp">OUR PRODUCTS</h3>
                </div>
                <div class="our-products-des animatable moveUp">
                    <p>BPlay’s high quality iGaming Platform offers a complete solution for your casino. 
                        Get the full White Label turnkey solution or the Seamless API with our comprehensive selection of games. 
                        Through our global network of premium partners such as Vivo Gaming, 
                        SBTech and HoGaming you will have access to the best Live Casino, Sportsbook, Slots, Table Games, 
                        Number Games and Fishing Games on the market.</p>
                </div>
            </div>
            <div class="our-products-cnt">
                <div class="our-products-list">
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img01.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Live Casino</a>
                                <span>Vivo LiveCasino, HoGaming Live Casino, <br /> BPlay LiveCasino</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img02.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Fishing Game</a>
                                <span>BPlay Fishing 2D, BPlay Fishing 3D</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img03.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Sport Book</a>
                                <span>BTI Sportsbook, BPlay Sportsbook</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img04.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Quick Number</a>
                                <span>Keno, Number Games, Lottery</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img05.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">White Label</a>
                                <span>Bplay White Label</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img06.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Slots</a>
                                <span>BPlay Slots, Jackpot Slots</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img07.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Seamless API</a>
                                <span>Seamless API</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img08.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Full Package</a>
                                <span>Full Package</span>
                            </div>
                        </div>
                    </div>
                    <div class="our-products-item">
                        <div class="our-products-body">
                            <div class="our-products-img">
                                <a href="#"><img src="~/assets/images/playgame_img08.png" alt="" /></a>
                            </div>
                            <div class="our-products-caption">
                                <a href="#">Table Game</a>
                                <span>Table Game</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.our-products-cnt .our-products-list{
    list-style: none;
    margin: 0 -24px;
}
.our-products-cnt .our-products-list .our-products-item{
    width: 33.33%;
    float: left;
    padding: 0 24px;
    margin-bottom: 46px;
}
.our-products-cnt .our-products-list .our-products-item:nth-child(3n+1){
    clear: left;
}
.our-products-cnt .our-products-img{
    margin-bottom: 26px;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    overflow: hidden;
}
.our-products-cnt .our-products-img img{
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}
.our-products-cnt .our-products-img a:hover img{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
    opacity:1;
}
.our-products-cnt .our-products-caption{
    text-align: center;
}
.our-products-cnt .our-products-caption a{
    display: inline-block;
    width: 338px;
    height: 54px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 1px;
    color: #FFFDF1;
    mix-blend-mode: normal;
    text-decoration: none;
    background: transparent url(~/assets/images/bg_link.png) no-repeat left top;
    padding: 7px 0 0 0;
    margin-bottom: 20px;
}
.our-products-cnt .our-products-caption span{
    display: block;
}
@media only screen and (max-width: 640px){
    .our-products {
        background: #1A1C25 url(~/assets/images/bg_our_products_sp.png) no-repeat 1px 1px;
        background-size: 100% auto;
        padding: 93px 0 10px;
    }
    .our-products .section-ttl{
        float: none;
        margin-right: 0;
    }
    .our-products .our-products-des{
        width: 100%;
        text-align: center;
    }
    .our-products-cnt .our-products-list .our-products-item:nth-child(3n+1){
        clear: inherit;
    }
     .our-products-cnt .our-products-list .our-products-img img{
         width: 100%;
     }
     .our-products-cnt .our-products-list{
        margin: 0 -10px;
     }
     .our-products-cnt .our-products-list .our-products-item{
        padding: 0 10px
     }
     .our-products-cnt .our-products-caption a{
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 1px;
        background-size: 100% auto;
        width: 215px;
        height: 35px;
     }
     .our-products-cnt .our-products-caption span{
        font-weight: 600;
        font-size: 14px;
        line-height: 26px;
     }
    .our-products-cnt .our-products-list .slick-dots{
        list-style: none;
        text-align: center;
     }
     .our-products-cnt .our-products-list .slick-dots li{
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 40px;
     }
      .our-products-cnt .our-products-list .slick-dots li button{
          border: none;
          background: transparent;
          text-indent: -9999px;
          background: transparent url(~/assets/images/dot_slick.png) no-repeat left top;
          outline: none;
      }
      .our-products-cnt .our-products-list .slick-dots li.slick-active button{
           background: transparent url(~/assets/images/dot_slick_active.png) no-repeat left top;
      }
      .our-products:before{
        -moz-background-size: 100% auto;
        -webkit-background-size: 100% auto;
        background-size: 100% auto;
        height: 75px;
        bottom: -60px;
      }
}
</style>
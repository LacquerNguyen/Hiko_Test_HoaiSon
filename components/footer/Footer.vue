<template>
    <footer class="box-footer">
        <div class="container">
            <div class="logo-footer animatable moveUp">
                <img src="~/assets/images/logo_footer.png" alt="">
            </div>
            <div class="contact-footer">
                <div class="contact-ttl animatable moveUp">
                    <h4>CONTACT US</h4>
                </div>
                <div class="contact-address">
                    <p class="address animatable moveUp">2901 Marmora Road, Glassgow, Seattle, WA 98122-1090</p>
                    <p class="mail animatable moveUp"><a href="#">info@bplay.com</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="mga-logo">
                    <ul>
                        <li><a href="#"><img src="~/assets/images/sabs.png" alt=""/></a></li>  
                        <li><a href="#"><img src="~/assets/images/curacao.png" alt=""/></a></li>
                         <li><a href="#"><img src="~/assets/images/itech.png" alt=""/></a></li>
                        <li><a href="#"><img src="~/assets/images/mga.png" alt=""/></a></li>
                    </ul>
                </div>
                <div class="copy-right">
                    <p>Copyright © 2020 bplay.com. All rights reserved.</p>
                </div>
            </div>
            <div class="pnavi">
                <a href="#wrapper">TOP</a>
            </div>
        </div>
    </footer>
</template>

<style>
.box-footer{
    position: relative;
    padding-bottom: 30px;
}
.logo-footer{
    float: left;
}
.contact-footer{
    float: right;
    width: 550px;
    margin-bottom: 44px;
}
.contact-footer .contact-ttl h4{
    font-style: normal;
    font-weight: 800;
    font-size: 34px;
    line-height: 40px;
    color: #FDFDFD;
    mix-blend-mode: normal;
    margin-bottom: 29px;
}
.contact-footer .address{
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 146.28%;
    color: #FFFFFF;
    transform: rotate(0.1deg);
    margin-bottom: 6px;
    padding-left: 50px;
    background: transparent url(~/assets/images/icon_address.png) no-repeat 0 8px;
}
.contact-footer .mail a{
    font-size: 28px;
    line-height: 146.28%;
    color: #FFFFFF;
    transform: rotate(0.1deg);
    padding-left: 50px;
    background: transparent url(~/assets/images/icon_mail.png) no-repeat 0 8px;
    text-decoration: none;
}

.footer-bottom{
    clear: both;
    overflow: hidden;
    border-top: 0.5px solid #424657;
    padding-top: 35px;
}
.mga-logo{
    float: left;
}
.copy-right{
    float: right;
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    text-align: right;
    color: #FFFFFF;
    opacity: 0.7;
    transform: rotate(0.1deg);
}
.mga-logo ul{
    overflow: hidden;
    list-style: none;
}
.mga-logo ul li:last-child{
    float: left;
}
.mga-logo ul li{
    float: right;
    margin-right: 20px;
}
.mga-logo ul li:nth-child(3),
.mga-logo ul li:nth-child(2){
    margin-right: 53px;
}
.pnavi{
    position: absolute;
    bottom: 80px;
    right: 7%;
    animation: anipnavi 1.5s infinite;
    -moz-animation: anipnavi  1.5s infinite;
    -webkit-animation: anipnavi  1.5s infinite;
    -o-animation: anipnavi  1.5s infinite;
}
.pnavi.pnavi_fixed{
    position: fixed;
    bottom: 10px;
     animation: inherit;
    -moz-animation: inherit;
    -webkit-animation:inherit ;
    -o-animation:inherit;
}
.pnavi a{
    font-family: Raleway;
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 1px;
    color: #FFFFFF;
    mix-blend-mode: normal;
    text-decoration: none;
    width: 70px;
    padding-top: 50px;
    background: transparent url(~/assets/images/pnavi.png) no-repeat center top;
}
@keyframes anipnavi {
    0% { bottom: 80px; }
    50% { bottom: 90px; }
    100% { bottom: 80px; }
}
@media only screen and (max-width: 640px){
    .box-footer{
        padding-bottom: 10px;
    }
    .logo-footer{
        float: none;
        margin-bottom: 42px;
    }
    .contact-footer{
        float: none;
        width: 100%;
    }
    .logo-footer img{
        width: 118px;
        height: auto;
    }
    .contact-footer .contact-ttl h4{
        font-size: 18px;
        line-height: 21px;
        text-align: left;
        color: #FDFDFD;
    }
    .contact-footer .address{
        font-size: 16px;
        line-height: 146.28%;
        color: #FFFFFF;
        background-size: 14px auto;
            padding-left: 35px;
    }
    .contact-footer .mail a{
        font-size: 16px;
        line-height: 146.28%;
        color: #FFFFFF;
        background-size: 18px auto;
        background-position: 0 3px;
            padding-left: 35px;
    }
    .mga-logo{
        float: none;
    }
    .mga-logo ul{
        margin-bottom: 30px;
        padding: 0;
        width: 260px;
        margin: 0 auto;
    }
     .mga-logo ul li{
         float: left;
         margin:0 53px 30px 0;
     }
     .mga-logo ul li:nth-child(3){
         margin-right: 0;
     }
    .copy-right{
        border-top: 0.5px solid #424657;
        padding-top: 20px;
        float: none;
        text-align: center;
    }
    .pnavi{
        bottom: 60px;
        right: 5%;
        animation: anipnavi 1.5s infinite;
        -moz-animation: anipnavi 1.5s infinite;
        -webkit-animation: anipnavi 1.5s infinite;
        -o-animation: anipnavi 1.5s infinite;
    }
    .pnavi a{
        font-size: 14px;
        letter-spacing: 1px;
        background-size: 32px auto;
        width: 35px;
        padding-top: 24px;
    }
    @keyframes anipnavi {
    0% { bottom: 60px; }
    50% { bottom: 70px; }
    100% { bottom: 60px; }
}
}
</style>
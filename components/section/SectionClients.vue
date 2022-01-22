<template>
      <section class="section-clients">
        <div class="container">
            <div class="section-ttl">
                <span class="animatable moveUp">BPLAY GAME</span>
                <h3 class="animatable moveUp">OUR CLIENTS</h3>
            </div>
            <div class="clients-banner">
                <ul>
                    <li><a href="#"><img src="~/assets/images/client_img01.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img02.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img03.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img04.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img05.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img06.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img07.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img08.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img09.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img10.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img11.png" alt="" /></a></li>
                    <li><a href="#"><img src="~/assets/images/client_img12.png" alt="" /></a></li>
                </ul>
            </div>
        </div>

      </section>
</template>

<style>
.section-clients {
    margin-bottom: 140px;
}
.section-clients .section-ttl{
    margin-bottom: 80px;
}
.section-clients .clients-banner ul{
    display: flex;
    list-style: none;
    flex-flow: row wrap;
    justify-content: center;
    padding-left: 0;
    margin: 0 -39px;
}
.section-clients .clients-banner ul li{
    width: 20%;
    padding: 0 39px;
    margin-bottom: 69px;
}
.section-clients .clients-banner img{
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
}
.section-clients .clients-banner a:hover img{
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
    opacity:1;
}
@media only screen and (max-width: 640px){
.section-clients .clients-banner ul{
    margin: 0 -10px;
}
.section-clients .clients-banner ul li{
    width: 33.33%;
    padding: 0 10px;
    margin-bottom: 21px;
}
.section-clients .clients-banner ul li img{
    width: 100%;
    height: auto;
}
.section-clients .section-ttl {
    margin-bottom: 38px;
}
}
</style>
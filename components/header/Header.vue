<template>
    <header class="box-header">
        <div class="box-header-wrap">
            <div class="container">
                <div class="header-logo">
                    <h1><span>gplay</span></h1>
                </div>
                <div class="header-rgt">
                    <div class="gnavi">
                        <ul>
                            <li><a href="#">HoaiSon</a></li>
                            <li><a href="#">PRODUCTS</a></li>
                            <li><a href="#">PARTNERS</a></li>
                            <li><a href="#">OUR CLIENTS</a></li>
                            <li><a href="#">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div class="select-langu">
                        <a href="">ENG</a>
                    </div>
                </div>
                <div class="smart-menu-btn">
                    <a href="javascript:void"><img src="~/assets/images/icon_menu.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="smart-menu-content">
            <div class="smart-menu-wrap">
                <div class="btn-close">
                    <a href="javascript:void"><img src="~/assets/images/close.png" alt=""></a>
                </div>
                <div class="select-langu">
                    <a href="">ENG</a>
                </div>
            </div>
        </div>   
    </header>
</template>

<style>
.smart-menu-content{
    display: none;
}
.box-header-wrap{
    padding: 41px 0;
 	position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 10;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    background: transparent;
}
.box-header-wrap.fixed{
    background: rgba(0, 0, 0, 0.7);
    top: -134px;
}
.box-header-wrap.show{
    top: 0;
    background: rgba(0, 0, 0, 0.7);
}
.header-logo{
    float: left;
}
.header-logo h1{
    display: block;
    width: 150px;
    height: 52px;
    background: transparent url(~/assets/images/Logo.png) no-repeat;
}
.header-logo h1 span{
    display: inline-block;
    width: 150px;
    height: 52px;
    position: relative;
    z-index: -1;
    text-indent: -9999px;
}
.header-rgt{
    float: right;
}
.select-langu{
    margin-left: 72px;
}
.select-langu{
    display: inline-block;
    background: transparent url(~/assets/images/arrow_select.png) no-repeat 101px 18px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 100px;
    width: 130px;
    height: 48px;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
     padding: 13px 25px 0 15px;
    cursor: pointer;
    outline: none;
}
.select-langu a{
  display: block;
  color: #FFFFFF;
  text-decoration: none;
  padding-left: 30px;
  background: transparent url(~/assets/images/eng_lague.png) no-repeat;
}

.header-rgt .select-langu,
.header-rgt .gnavi {
    display: inline-block;
    vertical-align: middle;
}
.header-rgt .gnavi ul{
    list-style: none;
}
.header-rgt .gnavi ul:after {
    content: "";
    clear: both;
    display: table;
  }
.header-rgt .gnavi ul li{
    float: left;
    margin-right: 56px;
}
.header-rgt .gnavi ul li a{
    position: relative;
    display: inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1px;
    color: #FFFFFF;
    text-decoration: none;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
}
.header-rgt .gnavi ul li a:after{
    content: "";
    position: absolute;
    z-index: 2;
    bottom: -4px;
    left: 0;
    right: 0;
    width: 100%;
    height: 1px;
    background: #FFFFFF;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
}
.header-rgt .gnavi ul li a:hover:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
}
.smart-menu-btn{
    display: none;
}
@media only screen and (max-width: 640px){
.smart-menu-btn,
.smart-menu-content{
    display: block;
}
.smart-menu-wrap{
    display: none;
    position: fixed;
    z-index: 20;
    width: 100%;
    top: 0;
    background: #15161E ;
    height: 100%;
    padding: 23px 16px;
}
.smart-menu-content .gnavi ul{
    list-style: none;
    padding: 0 20px;
}
.smart-menu-content .gnavi ul li{
    padding: 32px 0;
    border-bottom: 0.8px solid rgba(255, 255, 255, 0.1);
}
.smart-menu-content .gnavi ul a{
    display: block;
   font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1px;
    color: #FFFFFF;
    text-decoration: none;
    text-align: center;
}
.header-logo h1{
    width: 90px;
    height: 31px;
    background-size: 100% auto;
}
.box-header-wrap{
    padding: 20px 5px;
}
.smart-menu-btn{
    display: block;
    position: absolute;
    top: 25px;
    right: 15px;
    width: 30px;
    height: 30px;
}
.smart-menu-btn span, 
.smart-menu-btn span:before, 
.smart-menu-btn span:after {
    position: absolute;
    top: 50%;
    right: 50%;
    margin-right: -13px;
    margin-top: -1px;
    width: 26px;
    height: 2px;
    background-color: #FFFFFF;
}
.smart-menu-btn span:before, 
.smart-menu-btn span:after{
    content: "";
    display: block;
    width: 20px;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.smart-menu-btn span:before {
    transform: translateY(-7px);
}
.smart-menu-btn span:after {
    transform: translateY(7px);
}
.select-langu{
    width: 97px;
    height: 36px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.25px;
    padding: 7px 25px 0 10px;
    margin: 0 32px 0 0;
    margin: 0 45px 0 0;
    position: relative;
    top: -4px;
}
.btn-close{
    position: absolute;
    right: 20px;
    top: 22px;
}
}
</style>
